import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Change base to your repo name for GitHub Pages
// e.g. base: "/akaash-academy/"
// Leave as "/" for custom domain (Cloudflare)
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
