"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLogger = void 0;
const logger_config_1 = require("../config/logger.config");
const requestLogger = (req, _res, next) => {
    logger_config_1.logger.info(`Received ${req.method} request for ${req.url}`);
    next();
};
exports.requestLogger = requestLogger;
