import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";



// https://astro.build/config
export default defineConfig({
  site: 'https://lcoy.ae',

  sitemap: true,
  legacy: {
    astroFlavoredMarkdown: true
  },
  // Generate sitemap (set to "false" to disable)
  integrations: [sitemap()],
  // Add renderers to the config
  dependencies: {
    "jquery": "^3.6.0"
  }
});
