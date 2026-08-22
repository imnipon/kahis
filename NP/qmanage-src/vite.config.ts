import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Base path matches the eventual GitHub Pages location: https://imnipon.github.io/kahis/NP/qmanage/
export default defineConfig({
  base: '/kahis/NP/qmanage/',
  plugins: [react(), tailwindcss()],
})
