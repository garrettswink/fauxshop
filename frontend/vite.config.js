import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'src/main.jsx', // your main frontend entry file
      },
      external: ['mongoose'], // add mongoose to external dependencies
    },
  },
  server: {
    fs: {
      allow: ['frontend'], // adjust to your frontend directory
    },
  },
});
