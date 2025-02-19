import build from '@hono/vite-build/cloudflare-workers'
import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import { defineConfig } from 'vite'

export default defineConfig({
  css:{
    transformer:"lightningcss"
  },
  plugins: [
    build(),
    devServer({
      adapter:adapter(),
      entry: 'src/index.tsx',
    })
  ]
})
