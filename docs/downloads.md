# Urenstaatsjablonen

De drie publieke bestanden staan in `public/downloads/` en zijn gekoppeld vanaf `/urenstaat-maken/`:

- `urenstaat-sjabloon.xlsx`: twintig lege invoerregels; bedragen en totalen rekenen automatisch.
- `urenstaat-voorbeeld.xlsx`: hetzelfde bestand met drie fictieve regels, 4,25 uur en € 361,25 exclusief btw.
- `urenstaat-sjabloon.pdf`: één afdrukbare A4 met tien lege regels. Geen interactieve PDF-formuliervelden.

## Genereren

De bestanden worden als statische bouwresultaten meegeleverd; `npm run build` genereert ze niet opnieuw. Normale websiteontwikkeling heeft geen spreadsheet- of PDF-runtime nodig.

`scripts/generate-urenstaat.mjs` vereist Node en `@oai/artifact-tool`. Voer het script uit vanuit een omgeving waarin die module kan worden geïmporteerd, met een uitvoermap als argument:

```sh
node generate-urenstaat.mjs ./output
```

Tijdens deze generatie is het script gekopieerd naar een tijdelijke werkmap met toegang tot de Codex artifact-runtime. Kopieer alleen de twee gecontroleerde `.xlsx`-bestanden naar `public/downloads/`; bewaar de gerenderde PNG's als controlebewijs buiten de publieke map. Deze runtime is geen dependency van de website.

De PDF vereist Python met ReportLab:

```sh
python3 scripts/generate-urenstaat-pdf.py
```

## Controle bij wijzigingen

De spreadsheetgenerator controleert de voorbeeldtotalen, nul uur en een ontbrekend tarief. Een ontbrekend tarief bij ingevulde uren moet bij het eindbedrag `Tarief ontbreekt` tonen. Lege regels blijven leeg. Rond bedragen per regel op twee decimalen af.

Controleer na generatie de opgeslagen formules en waarden, open de gerenderde spreadsheetvoorbeelden en render alle PDF-pagina's. Controleer tekst, invoerruimte, afbreking en totalen. Download daarna de bestanden via de website.

Op 9 september 2026 zijn de spreadsheetwaarden met de artifact-runtime herberekend en uit de opgeslagen bestanden teruggelezen. Beide previews en de ene PDF-pagina zijn visueel gecontroleerd. Er is geen test in de native Microsoft Excel-app uitgevoerd.

Voorbeeldgegevens zijn fictief. De bestanden specificeren uren; het zijn geen facturen. Een gebruiker bewaart ingevulde kopieën zelf.

## Downloadtype en bestandsnaam

`vercel.json` geeft de drie bestanden een expliciet `Content-Type` en `Content-Disposition` met hun bestandsnaam. `scripts/download-files.mjs` gebruikt dezelfde regels in de Astro-devserver. De HTML-links bevatten daarnaast een expliciete downloadnaam. Zonder Excel-MIME-type werd de lokale `.xlsx`-download op een Mac als `.zip` opgeslagen en door Archiveringshulpprogramma geopend.

Voer met de devserver actief `npm run check:downloads` uit. De controle doet GET en HEAD voor alle drie bestanden, controleert type en bestandsnaam en vergelijkt alle ontvangen bytes met de bronbestanden. Na publicatie: `npm run check:downloads -- https://urenregistreren.com`. Bij een andere host moeten de downloadheaders daar worden ingesteld; Astro's statische output bewaart zelf geen HTTP-headers en `astro preview` past de Vercel-regels niet toe.
