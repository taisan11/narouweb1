import {parse} from "node-html-parser"

export function titlegetter(html:string):string {
    return parse(html).querySelector("body > div.l-container > main > article > h1")?.text!;
}