import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Puerto de desarrollo local
  },
  build: {
    outDir: 'dist', // Carpeta de salida para el build de producción
  },
})
