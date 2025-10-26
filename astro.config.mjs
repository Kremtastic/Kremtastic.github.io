// @ts-check
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import { defineConfig, envField } from "astro/config";

import vtbot from "astro-vtbot";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), vtbot()],
  adapter: netlify(),
  env: {
    schema: {
      CLIENT_ID: envField.string({ context: "server", access: "secret" }),
      CLIENT_SECRET: envField.string({ context: "server", access: "secret" }),
      REFRESH_TOKEN: envField.string({ context: "server", access: "secret" }),
    },
  },
});