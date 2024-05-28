import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // proxy requests prefixed '/api' and '/uploads'
    // Added proxies per Traversy input.
    // Doesn't seem effective, as still need credentials: 'include' to handle the cookie
    // Keeping this for now, in case I really run into trouble with deployment

    proxy: {
      '/api': 'http://localhost:8000',
      '/uploads': 'http://localhost:5000',
    },
  },
});
