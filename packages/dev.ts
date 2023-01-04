import _set from "https://cdn.skypack.dev/lodash.set"

const res = await fetch("https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt").then((res) => res.text())

const words = res.split('\n').map((word) => word.replace(/[^a-z]/g, '')).filter((word) => word.length > 0)

const branches = {}
for(const word of words) {
    const path = word.split('').join('.')
    _set(branches, path, 't.' + word)
}
Deno.writeTextFileSync("yggdrasil.ts", `import { trunk as t } from "./trunk";
export const branches = ${JSON.stringify(branches).replaceAll('"', '')};
`)

Deno.writeTextFileSync("trunk.ts", `export enum trunk {${words.map((word) => word + '="' + word + '"').join(',')}}
`)