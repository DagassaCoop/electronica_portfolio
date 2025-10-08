import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    assetsInlineLimit: 0, // Don't inline images as base64
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Keep original image quality
          if (/\.(png|jpe?g|gif|svg|webp|avif)$/i.test(assetInfo.name || "")) {
            return "assets/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
