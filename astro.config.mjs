import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://aliz-blog-astro.vercel.app/",
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
