import { createRoute } from "honox/factory";

export default createRoute((c) => {
    const wiplist = {
        "章一": {
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