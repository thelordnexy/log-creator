import { mkdir, writeFile } from "node:fs"
import { join } from "node:path"
import errorHandler from "./errorHandler"

export type Log = {
    (_code: string, _name: string, _log: string ): void
}

export const createLog: Log = (_code, _name, _log) =>
{
    let logPath = "./logs"
    let timeStamp = new Date()
    let logName = `${timeStamp}-${_code}.log`
    let logData = `CODE: ${ _code }\nNAME: ${ _name }\nTIME_STAMP: ${ timeStamp }\nLOG_ENTRY: ${ _log }\n`

    writeFile (join (logPath, logName), logData, "utf-8", (error) => {
        if ( error ) {
            errorHandler(error, logPath, createLog)
        } else {
            console.log (`new log created and it's details can be found in: ${logName}`) //if no error was encountered then good.
        }//-
    })

}
