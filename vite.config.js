import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 7500,
    strictPort: true, // optional: fails if 7500 is taken instead of picking another port
  },
})
