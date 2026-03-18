import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://perceptumnl.github.io',
  base: '/iga-website',
  integrations: [tailwind()],
});
