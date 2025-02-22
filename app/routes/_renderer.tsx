import { jsxRenderer } from 'hono/jsx-renderer'
import maincss from "@/styles/main.css?url"

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang='ja'>
      <head>
        <meta charset='UTF-8' />
        <link href={maincss} rel="stylesheet" />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        {title ? <title>{title} - NarouWeb</title> : <title>NarouWeb</title>}
      </head>
      <body>{children}</body>
    </html>
  )
})