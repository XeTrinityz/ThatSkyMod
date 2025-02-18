import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ThatSkyMod/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        '404': './404.html'
      }
    }
  },
})