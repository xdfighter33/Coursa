import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  '/registers': {
    target: 'http://localhost:5173/register', // Make sure the port matches your Express server
    changeOrigin: true
}

})
