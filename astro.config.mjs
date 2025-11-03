// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import { markdownConfigDefaults } from '@astrojs/markdown-remark';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  markdown: {
    ...markdownConfigDefaults,
  },
});
