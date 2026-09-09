// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { downloadFiles } from './scripts/download-files.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://urenregistreren.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: { plugins: [downloadFiles()] },
  build: {
    inlineStylesheets: 'always',
  },
});
