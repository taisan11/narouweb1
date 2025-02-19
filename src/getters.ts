export function titlegetter(doc:Response):string {
    let title = "";
    new HTMLRewriter().on('h1[class="p-novel__title p-novel__title--rensai"]', {
        text: (text) => {
            title = text.text;
        }
    }).transform(doc);
    return title;
}