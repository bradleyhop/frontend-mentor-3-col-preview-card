import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Make your Vite site load faster & boost SEO performance; Webfont DL -Vite Plugin
import { ViteWebfontDownload } from "vite-plugin-webfont-dl";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ViteWebfontDownload()],
  base: "/frontend-mentor-3-col-preview-card/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/assets/scss/main.scss";
        @import "@/assets/scss/colors.scss";
        @import "@/assets/scss/typography.scss";
        `,
      },
    },
  },
});
