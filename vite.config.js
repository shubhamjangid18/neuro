import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    experimental: {
      // opt out of Rolldown and use Rollup instead for more stable builds
      rollup: true
    }
  }
})
