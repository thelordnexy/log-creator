"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLog = void 0;
var node_fs_1 = require("node:fs");
var node_path_1 = require("node:path");
var errorHandler_1 = require("./errorHandler");
var createLog = function (_code, _name, _log) {
    var logPath = "./logs";
    var timeStamp = new Date();
    var logName = "".concat(timeStamp, "-").concat(_code, ".log");
    var logData = "CODE: ".concat(_code, "\nNAME: ").concat(_name, "\nTIME_STAMP: ").concat(timeStamp, "\nLOG_ENTRY: ").concat(_log, "\n");
    (0, node_fs_1.writeFile)((0, node_path_1.join)(logPath, logName), logData, "utf-8", function (error) {
        if (error) {
            (0, errorHandler_1.default)(error, logPath, exports.createLog);
        }
        else {
            console.log("new log created and it's details can be found in: ".concat(logName)); //if no error was encountered then good.
        } //-
    });
};
exports.createLog = createLog;
