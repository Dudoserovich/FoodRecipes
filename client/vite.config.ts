import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      components: '/src/components',
      assets: '/src/assets',
      store: '/src/store',
      pages: '/src/pages',
      services: '/src/services',
    }
  },
  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName: "[local]_[hash:base64:2]"
    }
  }
})
