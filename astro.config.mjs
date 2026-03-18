import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://perceptumnl.github.io',
  base: '/iga-website/',
  integrations: [tailwind(), sitemap()],
});
