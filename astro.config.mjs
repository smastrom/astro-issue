import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
      output: "server",
      prefetch: {
            prefetchAll: true,
            defaultStrategy: "viewport",
      },
      adapter: cloudflare(),
});
