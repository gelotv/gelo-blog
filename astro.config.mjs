import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://blog.gelo.tv",
  output: "static",
  integrations: [sitemap()],
});
