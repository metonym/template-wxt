import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "wxt";

// https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "src",
  modules: ["@wxt-dev/module-svelte"],
  alias: {
    "@": "./src",
  },
  vite: () => ({
    plugins: [tailwindcss()],
  }),
});
