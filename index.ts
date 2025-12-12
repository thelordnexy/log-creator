import { writeFile } from "node:fs"
import { join } from "node:path"
import errorHandler from "./src/errorHandler"
import timeStampGenerator from './src/timestampGenerator'

import type { loggertype } from "./src/types"

const logger: loggertype  = (_code, _name, _log, _source) =>
{
    let logPath = "./logs"
    let timeStamp = timeStampGenerator()
    let logName = `${timeStamp}.log`
    let logData = `CODE: ${ _code }\nNAME: ${ _name }\nTIME_STAMP: ${ timeStamp }\nORIGIN: ${ _source }\nLOG_ENTRY: ${ _log }\n`

    writeFile (join (logPath, logName), logData, "utf-8", (error) => {
        if ( error ) {
            errorHandler(error, logPath, logger, () => logger(_code, _name, _log, _source))
        } else {
            console.log (`new log created, details can be found in: ${logName}`) //if no error was encountered then good.
        }//-
    })

}

export default logger
