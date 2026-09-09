import { readFile } from 'node:fs/promises';
import hosting from '../vercel.json' with { type: 'json' };

// Use the same download headers locally as on Vercel. Astro's dev file server
// currently sends an empty Content-Type for .xlsx, which invites ZIP detection.
// Only exact, configured filenames are served; request paths never select files.
const downloads = new Map(hosting.headers
  .filter((rule) => /^\/downloads\/[\w-]+\.(xlsx|pdf)$/.test(rule.source))
  .map((rule) => [rule.source, {
    file: new URL(`../public${rule.source}`, import.meta.url),
    headers: Object.fromEntries(rule.headers.map(({ key, value }) => [key, value])),
  }]));

/** @returns {import('vite').Plugin} */
export function downloadFiles() {
  return {
    name: 'uurwerk-download-files',
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
        const download = downloads.get((request.url ?? '').split('?')[0]);
        if (!download || !['GET', 'HEAD'].includes(request.method ?? '')) return next();
        try {
          const body = await readFile(download.file);
          response.writeHead(200, {
            ...download.headers,
            'Content-Length': body.length,
            'Cache-Control': 'no-cache',
          });
          response.end(request.method === 'HEAD' ? undefined : body);
        } catch (error) {
          next(error);
        }
      });
    },
  };
}
