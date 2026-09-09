// Integration check: start Astro first, or pass a deployed origin as an argument.
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const origin = process.argv[2] ?? 'http://localhost:4321';
const files = [
  ['urenstaat-sjabloon.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
  ['urenstaat-voorbeeld.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
  ['urenstaat-sjabloon.pdf', 'application/pdf'],
];

for (const [filename, type] of files) {
  const expected = await readFile(new URL(`../public/downloads/${filename}`, import.meta.url));
  for (const method of ['GET', 'HEAD']) {
    const response = await fetch(new URL(`/downloads/${filename}`, origin), { method, signal: AbortSignal.timeout(10_000) });
    assert.equal(response.status, 200, `${method} ${filename}`);
    assert.equal(response.headers.get('content-type'), type, `${filename}: bestandstype`);
    assert.equal(response.headers.get('content-disposition'), `attachment; filename="${filename}"`, `${filename}: downloadnaam`);
    const body = Buffer.from(await response.arrayBuffer());
    assert.deepEqual(body, method === 'HEAD' ? Buffer.alloc(0) : expected, `${filename}: volledige, ongewijzigde inhoud`);
  }
  console.log(`OK ${filename}: GET/HEAD, bestandstype, downloadnaam en inhoud`);
}
