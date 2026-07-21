import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true';

// Update `site` to your final custom domain before the production build —
// it feeds canonical URLs, the sitemap, and Open Graph tags site-wide.
export default defineConfig({
  site: 'https://prajjwalsharma.nz',
  // The live GitHub Pages URL is a project site, so built assets must be
  // prefixed with the repository name. Keep root paths for local/custom-domain use.
  base: isGitHubPagesBuild ? '/personal_portfolio' : undefined,
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
