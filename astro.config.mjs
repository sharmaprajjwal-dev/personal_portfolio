import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// Deployed as a GitHub Pages PROJECT site (repo: personal_portfolio).
// site + base must match your actual GitHub Pages URL exactly, or every
// internal link/asset will resolve to the wrong path.
//
// Once you buy prajjwalsharma.nz and point it at GitHub Pages (or move to
// another host), change `site` to 'https://prajjwalsharma.nz' and DELETE
// the `base` line entirely — a custom domain at the root doesn't need one.
export default defineConfig({
  site: 'https://sharmaprajjwal-dev.github.io',
  base: '/personal_portfolio/',
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap(),
    react(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-default',
      wrap: true,
    },
  },
});
