import { writeFile } from "node:fs"
import { join } from "node:path"
import errorHandler from "./src/errorHandler"

import { errorLog, requestLog } from "./src/types"

const errorLog: errorLog  = (_code, _name, _log) =>
{
    let logPath = "./logs/errors"
    let timeStamp = new Date()
    let logName = `${timeStamp}-${_code}.log`
    let logData = `CODE: ${ _code }\nNAME: ${ _name }\nTIME_STAMP: ${ timeStamp }\nLOG_ENTRY: ${ _log }\n`

    writeFile (join (logPath, logName), logData, "utf-8", (error) => {
        if ( error ) {
            errorHandler(error, logPath, errorLog, () => errorLog(_code, _name, _log))
        } else {
            console.log (`new log created and it's details can be found in: ${logName}`) //if no error was encountered then good.
        }//-
    })

}

const requestLog: requestLog = (_source, _url, _method) =>
{
    let logPath = "./logs/requests"
    let timeStamp = new Date()
    let logName = `${timeStamp}-request.log`
    let logData = `SOURCE: ${ _source }\nURL: ${ _url }\nMETHOD: ${ _method }\nTIME_STAMP: ${ timeStamp }\n`

    writeFile (join (logPath, logName), logData, "utf-8", (error) => {
        if ( error ) {
            errorHandler(error, logPath, errorLog, () => requestLog(_source, _url, _method))
        } else {
            console.log (`new log created and it's details can be found in: ${logName}`) //if no error was encountered then good.
        }//-
    })
}

export { errorLog, requestLog }
