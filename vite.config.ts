import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import path from "path";
//
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      "@ui": path.resolve(__dirname, "./src/components/ui/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@redux": path.resolve(__dirname, "./src/redux/"),
    },
  },
});
