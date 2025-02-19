import { jsxRenderer } from 'hono/jsx-renderer'
import css from "./style.css?url"

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ja">
      <head>
        <link href={css} rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
})
