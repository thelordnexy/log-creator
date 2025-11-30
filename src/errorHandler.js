"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = errorHandler;
var node_fs_1 = require("node:fs");
function errorHandler(error, logPath, createLog) {
    if (error.code === "ENOENT") { //if the logs directory does not exist, create it.
        (0, node_fs_1.mkdir)(logPath, { mode: "0700" }, function (error) {
            if (error)
                console.error(error); //if there was an error when creating the directory then log to the console.
        });
        createLog(error.code, error.name, "".concat(error.message, "\n").concat(error.stack || "")); //and then try creating log file again.
    }
    else {
        if (error.name && error.code && error.message) { //if the log directory exists but there is a different error.
            var name_1 = error.name, code = error.code, message = error.message, stack = error.stack;
            createLog(code, name_1, "".concat(message, "\n").concat(stack)); //create a log file of that error.
        } //-
    } //-
}
