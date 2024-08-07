"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
const path_1 = __importDefault(require("path"));
const { combine, timestamp, printf, colorize, json } = winston_1.format;
const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});
exports.logger = (0, winston_1.createLogger)({
    level: process.env.NODE_ENV === "production" ? "info" : "debug",
    format: combine(timestamp(), process.env.NODE_ENV === "production" ? json() : logFormat),
    transports: [
        new winston_1.transports.File({
            filename: path_1.default.join(__dirname, "../../", "logs/error.log"),
            level: "error",
        }),
        new winston_1.transports.File({
            filename: path_1.default.join(__dirname, "../../", "logs/combined.log"),
        }),
    ],
});
if (process.env.NODE_ENV !== "production") {
    exports.logger.add(new winston_1.transports.Console({
        format: combine(colorize(), logFormat),
    }));
}
