import { mkdir } from "node:fs"
import { Log } from "."

export default function errorHandler (error: ErrnoException, logPath: string, createLog: Log)
{
    if ( error.code === "ENOENT" ) { //if the logs directory does not exist, create it.
        mkdir (logPath, { mode: "0700" },(error) => {
            if (error) console.error (error) //if there was an error when creating the directory then log to the console.
        })

        createLog (error.code, error.name, `${error.message}\n${error.stack || ""}`) //and then try creating log file again.

    } else {
        if (error.name && error.code && error.message) { //if the log directory exists but there is a different error.
            const { name, code, message, stack } = error

            createLog (code, name, `${message}\n${stack}`) //create a log file of that error.
        }//-
    }//-
}
