import { ErrorHandler } from 'hono'

const handler: ErrorHandler = (e, c) => {
  console.error(e)
  c.status(500)
  return c.render(<>
    <h1>500</h1>
    <p>エラーが発生しました</p>
  </>)
}

export default handler