import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { getDeployConfig } from "./scripts/deploy-target.mjs";

const deployConfig = getDeployConfig();

export default defineConfig({
  site: deployConfig.site,
  base: deployConfig.base,
  output: "static",
  integrations: [sitemap()],
});
