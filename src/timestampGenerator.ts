import { timestampGen } from "./types"

let hex: Array<string | number> = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

const timeStampGenerator: timestampGen = () =>
{
    let logTime = new Date().getTime()
    let uniqueHex = ""

    do {uniqueHex += (String(hex[Math.floor(Math.random() * hex.length)]))}
    while (uniqueHex.length < 4)

    return (`${logTime}-${uniqueHex}`)

}

export default timeStampGenerator
