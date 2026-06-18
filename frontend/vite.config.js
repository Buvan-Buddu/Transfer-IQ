import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 5173,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'frontend-production-3449c.up.railway.app',
      '*.up.railway.app',
      '*.railway.app'
    ]
  },
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 5173,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'frontend-production-3449c.up.railway.app',
      '*.up.railway.app',
      '*.railway.app'
    ]
  }
})

