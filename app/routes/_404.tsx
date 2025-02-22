import { NotFoundHandler } from 'hono'

const handler: NotFoundHandler = (c) => {
  c.status(404)
  return c.render(<>
    <h1>404</h1>
    <p>ページが見つかりません</p>
  </>)
}

export default handler