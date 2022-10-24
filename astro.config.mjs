import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "rose-pine-moon",
      wrap: true
    }
  }
});