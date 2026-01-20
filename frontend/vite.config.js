import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isProduction = process.env.NODE_ENV === 'production'
const env = {
  APP_ENV: process.env.APP_ENV || 'development'
}

export default defineConfig(() => {
  return {
    plugins: [react()],
    // Use the deployed site URL as the base when building for production so
    // absolute asset paths point to the correct host.
    base: isProduction ? 'https://the-rebookhub.onrender.com/' : '/',
    build: {
      outDir: 'dist',
      sourcemap: false
    },
    server: {
      host: true,
      port: 3000,
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    }
  }
})