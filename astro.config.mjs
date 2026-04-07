// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://henostudio.pl',

  i18n: {
    defaultLocale: 'pl',
    locales: ['pl'],
  },

  vite: {
    css: {
      preprocessorOptions: {},
    },
  },

  image: {
    domains: ['images.squarespace-cdn.com'],
  },

  integrations: [sitemap()],
});