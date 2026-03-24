import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Import đúng plugin v4

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Thêm dòng này vào
  ],
})