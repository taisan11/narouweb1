const Incache = caches.default

export function cache(key:string,value:string):string {
    Incache.match(key).then((response) => {
        response?.text().then((text) => {
            if (text != value) {
                Incache.put(key, new Response(value))
                return value
            }
            return text
        })
    })
    return value
}