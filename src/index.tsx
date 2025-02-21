import { Hono } from 'hono'
import { renderer } from './renderer'
import { atobungetter, honbungetter, maebungetter, titlegetter } from './getters'
import { cache } from './cache'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(<>
    <h1>なろうweb1</h1>
    <p>最低限のJSと超速な環境美しいUI</p>
  </>)
})

app.get("/:ncode", async (c) => {
  const wiplist = {
    "章一":{
      "ゆっくり": "https://ncode.syosetu.com/n0000aa/1",
    }
  }
  return c.render(<>
    <h1>{"wip:タイトル名"}</h1>
    <p>{"wip:説明"}</p>
    {Object.entries(wiplist).map(([title, list]) => (
      <>
      <h2>{title}</h2>
      {Object.entries(list).map(([name, url]) => (
        <a href={url}>{name}</a>
      ))}
      </>
    ))}
  </>)
})

app.get("/:ncode/:chapter{[0-9]+}", async (c) => {
  const { ncode, chapter } = c.req.param()
  const base = await fetch(`https://ncode.syosetu.com/${ncode}/${chapter}/`,{headers:{"User-Agent":"Mozilla/5.0"}})
  const basetext = await base.text()
  const title = cache(`${ncode}/${chapter}/title`, titlegetter(basetext))
  const maebun = cache(`${ncode}/${chapter}/mae`, maebungetter(basetext))
  const honbun = cache(`${ncode}/${chapter}/hon`, honbungetter(basetext))
  const atobun = cache(`${ncode}/${chapter}/ato`, atobungetter(basetext))
  return c.render(<>
    <h1>{title}</h1>
    <div __dangerouslySetInnerHTML={honbun}></div>
  </>)
})

app.notFound((c)=>{
  c.status(404)
  return c.render(<>
    <h1>404</h1>
    <p>ページが見つかりません</p>
  </>)
})

app.onError((e, c) => {
  console.error(e)
  c.status(500)
  return c.render(<>
    <h1>500</h1>
    <p>エラーが発生しました</p>
  </>)
})

export default app
