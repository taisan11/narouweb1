// import build from '@hono/vite-build/cloudflare-workers'
// import devServer from '@hono/vite-dev-server';
// import cloudflareAdapter from '@hono/vite-dev-server/cloudflare';
import {cloudflare} from "@cloudflare/vite-plugin"
import { defineConfig } from 'vite'
import {getPlatformProxy} from "wrangler"

export default defineConfig({
  css:{
    transformer:"lightningcss"
  },
  plugins: [
    // build(),
    // devServer({
    //   entry: 'src/index.tsx', // あなたのエントリーポイントに合わせてください
    //   adapter: cloudflareAdapter,
    // }),
    cloudflare({
      configPath:"./wrangler.jsonc",
    })
  ]
})
