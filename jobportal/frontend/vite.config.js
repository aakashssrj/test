import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import autoprefixer from "autoprefixer"
import tailwindcss from '@tailwindcss/postcss';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
