import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  server: {
    port: 5500,
    strictPort: true
  },
  preview: {
    port: 5500,
    strictPort: true
  }
});