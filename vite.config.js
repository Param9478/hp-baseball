import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Eh line add karo

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Ehnu plug-ins 'ch pao
  ],
})