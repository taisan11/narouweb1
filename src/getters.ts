import {parse} from "node-html-parser"

export function titlegetter(html:string):string {
    return parse(html).querySelector("body > div.l-container > main > article > h1")?.text!;
}

export function maebungetter(html:string):string {
    return parse(html).querySelector("body > div.l-container > main > article > div.p-novel__body > div.js-novel-text.p-novel__text.p-novel__text--preface")?.innerHTML!;
}

export function honbungetter(html:string):string {
    return parse(html).querySelector("body > div.l-container > main > article > div.p-novel__body > div:nth-child(2)")?.innerHTML!;
}

export function atobungetter(html:string):string {
    return parse(html).querySelector("body > div.l-container > main > article > div.p-novel__body > div:nth-child(3)")?.innerHTML!;
}