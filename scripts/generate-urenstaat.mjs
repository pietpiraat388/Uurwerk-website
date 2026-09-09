// Run using the Codex artifact runtime (see docs/downloads.md).
import fs from 'node:fs/promises';
import path from 'node:path';
import { Workbook, SpreadsheetFile } from '@oai/artifact-tool';

const output = process.argv[2];
if (!output) throw new Error('Provide an output directory.');
await fs.mkdir(output, { recursive: true });
for (const example of [false, true]) {
  const workbook = Workbook.create();
  const sheet = workbook.worksheets.add('Urenstaat');
  sheet.showGridLines = false;
  sheet.getRange('A1:E37').format.font = { name: 'Arial', size: 11, color: '#1e2921' };
  sheet.getRange('A1:E37').format.rowHeight = 24;
  for (const [column, width] of [['A', 16], ['B', 44], ['C', 12], ['D', 16], ['E', 20]]) sheet.getRange(`${column}:${column}`).format.columnWidth = width;
  sheet.getRange('A1').values = [['Urenstaat']];
  sheet.getRange('A1:E1').format = { fill: '#1c2b21', font: { name: 'Arial', size: 16, bold: true, color: '#ffffff' }, rowHeight: 36 };
  sheet.getRange('B2').values = [[example ? 'Ingevuld voorbeeld met fictieve gegevens' : 'Leeg sjabloon - vul de groene velden in']];
  sheet.getRange('B2').format.font = { name: 'Arial', size: 10, italic: true, color: '#55635a' };
  sheet.getRange('A3:A7').values = [['Opdrachtnemer'], ['Opdrachtgever'], ['Project'], ['Periode van'], ['Periode t/m']];
  sheet.getRange('B3:B7').format.fill = '#e2ebe5';
  if (example) sheet.getRange('B3:B7').values = [['Studio Noord'], ['Acme Bouw'], ['Websiteonderhoud'], [new Date('2026-06-17T00:00:00Z')], [new Date('2026-06-18T00:00:00Z')]];
  sheet.getRange('B6:B7').setNumberFormat('dd-mm-yyyy');
  sheet.getRange('B9').values = [['Uren na aftrek van pauzes. Bedragen exclusief btw.']];
  sheet.getRange('B9').format = { wrapText: true, rowHeight: 34, font: { name: 'Arial', size: 10, color: '#55635a' } };
  sheet.getRange('A10:E10').values = [['Datum', 'Werkzaamheden', 'Uren', 'Tarief (EUR)', 'Bedrag (EUR)']];
  sheet.getRange('A10:E10').format = { fill: '#1c2b21', font: { name: 'Arial', size: 11, color: '#ffffff', bold: true }, horizontalAlignment: 'center', rowHeight: 30 };
  sheet.getRange('A11:D30').format.fill = '#f0f5f1';
  sheet.getRange('A11:A30').setNumberFormat('dd-mm-yyyy');
  sheet.getRange('B11:B30').format.wrapText = true;
  sheet.getRange('A11:E30').format.rowHeight = 30;
  sheet.getRange('C11:E31').setNumberFormat('#,##0.00');
  sheet.getRange('C11:E31').format.horizontalAlignment = 'right';
  sheet.getRange('C11:C30').dataValidation = { rule: { type: 'decimal', operator: 'between', formula1: 0, formula2: 24 } };
  sheet.getRange('D11:D30').dataValidation = { rule: { type: 'decimal', operator: 'greaterThanOrEqual', formula1: 0 } };
  sheet.getRange('E11:E30').formulas = Array.from({ length: 20 }, (_, index) => [`=IF(COUNT(C${index + 11},D${index + 11})<2,"",ROUND(C${index + 11}*D${index + 11},2))`]);
  sheet.getRange('B31').values = [['Totaal exclusief btw']];
  sheet.getRange('C31').formulas = [['=IF(COUNT(C11:C30)=0,"",SUM(C11:C30))']];
  sheet.getRange('E31').formulas = [['=IF(COUNT(C11:C30)=0,"",IF(COUNT(E11:E30)<COUNT(C11:C30),"Tarief ontbreekt",SUM(E11:E30)))']];
  sheet.getRange('A31:E31').format.fill = '#e2ebe5';
  sheet.getRange('A31:E31').format.font.bold = true;
  sheet.getRange('B33').values = [['1,5 uur = 1 uur en 30 minuten. 15 minuten = 0,25 uur.']];
  sheet.getRange('B34').values = [['Vul alleen A t/m D in. Kolom E en rij 31 rekenen automatisch. Er zijn 20 invoerregels.']];
  sheet.getRange('B35').values = [['Bewaar je bestand op je eigen apparaat. Een urenstaat is geen factuur.']];
  sheet.getRange('B36').values = [['Uitleg en nieuwe sjablonen: urenregistreren.com/urenstaat-maken/']];
  sheet.getRange('B33:B36').format = { wrapText: true, rowHeight: 42, font: { name: 'Arial', size: 10, color: '#55635a' } };
  sheet.freezePanes.freezeRows(10);
  if (example) sheet.getRange('A11:D13').values = [
    [new Date('2026-06-17T00:00:00Z'), 'Controle urenstaat en factuurregels', 1.5, 85],
    [new Date('2026-06-18T00:00:00Z'), 'Homepage bijgewerkt, nieuw menu', 2.5, 85],
    [new Date('2026-06-18T00:00:00Z'), 'Timerregistratie, kleine fixes', 0.25, 85],
  ];
  workbook.recalculate();
  console.log((await workbook.inspect({ kind: 'region', sheetId: 'Urenstaat', range: 'B31:E31', maxChars: 1000 })).ndjson);
  if (example) {
    if (sheet.getRange('C31').values[0][0] !== 4.25 || sheet.getRange('E31').values[0][0] !== 361.25) throw new Error('Example total mismatch');
    sheet.getRange('C11').values = [[0]];
    workbook.recalculate();
    if (sheet.getRange('E31').values[0][0] !== 233.75) throw new Error(`Zero duration: ${JSON.stringify(sheet.getRange('E31').values)}`);
    sheet.getRange('C11').values = [[1.5]];
    sheet.getRange('D11').clear({ applyTo: 'contents' });
    workbook.recalculate();
    if (sheet.getRange('E31').values[0][0] !== 'Tarief ontbreekt') throw new Error('Missing rate hidden');
    sheet.getRange('D11').values = [[85]];
  }
  workbook.recalculate();
  console.log((await workbook.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#NUM!|#NULL!',options:{useRegex:true,maxResults:5},maxChars:1000})).ndjson);
  const filename = example ? 'urenstaat-voorbeeld' : 'urenstaat-sjabloon';
  const preview = await workbook.render({ sheetName: 'Urenstaat', range: 'A1:E37', scale: 1.4 });
  await fs.writeFile(path.join(output, `${filename}-preview.png`), new Uint8Array(await preview.arrayBuffer()));
  await (await SpreadsheetFile.exportXlsx(workbook)).save(path.join(output, `${filename}.xlsx`));
}
