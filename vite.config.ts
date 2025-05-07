import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "myorganization-tv",
    project: "javascript-react"
  })],

  server: {
    watch: {
      usePolling: true
    }
  },

  build: {
    sourcemap: true
  }
})