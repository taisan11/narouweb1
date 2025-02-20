import { jsxRenderer } from 'hono/jsx-renderer'
import maincss from "./style.css?url"

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ja">
      <head>
        <link href={maincss} rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
})
