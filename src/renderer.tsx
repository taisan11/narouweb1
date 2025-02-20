import { jsxRenderer } from 'hono/jsx-renderer'
import {css,Style} from "hono/css"

const maincss = css`body {
    max-width: 800px;
    margin: 0 auto;
}
@media (max-width: 800px) {
    body {
        margin: 0;
    }
}`

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ja">
      <head>
        <Style/>
        {/* <link href={maincss} rel="stylesheet" /> */}
      </head>
      <body class={maincss}>{children}</body>
    </html>
  )
})
