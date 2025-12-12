import { writeFile } from "node:fs"
import { join } from "node:path"
import errorHandler from "./errorHandler"
import logIdGenerator from './logIdGenerator'
import { loggerLogFunction } from "./types"

export class logger
{
    private logPath = "./logs"
    private code: string
    private name: string
    private source: string
    private logs: string
    public id = logIdGenerator()
    private logName = `${this.id}.log`

    constructor (code: string, name: string, source: string, logs: string) {
        this.code = code
        this.name = name
        this.source = source
        this.logs = logs
    }


    public log: loggerLogFunction = () =>
    {
        let logData = `CODE: ${ this.code }\nNAME: ${ this.name }\nLOG_ID: ${ this.id }\nORIGIN: ${ this.source }\nLOG_ENTRY: ${ this.logs }\n`

        writeFile (join (this.logPath, this.logName), logData, "utf-8", (error) => {
            if ( error ) {
            errorHandler(error, this.logPath, new logger(this.code, this.name, this.source, this.logs).log)
            } else {
            console.log (`new log created, details can be found in: ${this.logName}`) //if no error was encountered then good.
            }
        })
    }

}

export default logger
