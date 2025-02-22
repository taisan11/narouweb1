import {createRoute} from "honox/factory"
import {cache} from "@/cache"
import {titlegetter, maebungetter, honbungetter, atobungetter} from "@/getters"

//ToDo:/:ncode/:chapter{[0-9]+}

export default createRoute(async (c) => {
    const { ncode, chapter } = c.req.param()
    const base = await fetch(`https://ncode.syosetu.com/${ncode}/${chapter}/`, { headers: { "User-Agent": "Mozilla/5.0" } })
    const basetext = await base.text()
    const title = cache(`${ncode}/${chapter}/title`, titlegetter(basetext))
    const maebun = cache(`${ncode}/${chapter}/mae`, maebungetter(basetext))
    const honbun = cache(`${ncode}/${chapter}/hon`, honbungetter(basetext))
    const atobun = cache(`${ncode}/${chapter}/ato`, atobungetter(basetext))
    return c.render(<>
        <h1>{title}</h1>
        <div __dangerouslySetInnerHTML={maebun}></div>
        <div __dangerouslySetInnerHTML={honbun}></div>
        <div __dangerouslySetInnerHTML={atobun}></div>
    </>)
})