// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { downloadFiles } from './scripts/download-files.mjs';

// Oude URL's die doorverwijzen; ze horen niet in de sitemap.
const REDIRECTED = ['/urencriterium-zzp/', '/uren-bijhouden-zonder-excel/'];

// https://astro.build/config
export default defineConfig({
  site: 'https://urenregistreren.com',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !REDIRECTED.some((path) => page.endsWith(path)) })],
  redirects: {
    '/urencriterium-zzp/': '/urencriterium/',
    '/uren-bijhouden-zonder-excel/': '/urenregistratie-excel/',
  },
  vite: { plugins: [downloadFiles()] },
  build: {
    inlineStylesheets: 'always',
  },
});
