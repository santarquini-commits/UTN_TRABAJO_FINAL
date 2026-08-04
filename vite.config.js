import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/UTN_TRABAJO_FINAL",
  plugins: [react()],
})
