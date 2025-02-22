import build from '@hono/vite-build/cloudflare-pages'
import cloudflareAdapter from '@hono/vite-dev-server/cloudflare';
import honox from "honox/vite"
import {cloudflare} from "@cloudflare/vite-plugin"
import { defineConfig } from 'vite'

export default defineConfig(({mode}) => {
  console.log("mode", mode)
  return {
    css: {
      transformer: "lightningcss"as"lightningcss"
    },
    plugins: [
      honox({ devServer: { adapter: cloudflareAdapter } }),
      build(),
    ]
  }
})
