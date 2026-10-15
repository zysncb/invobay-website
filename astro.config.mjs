import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://invobay.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
