"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const logger_config_1 = require("../config/logger.config");
const errorHandler = (err, _req, res) => {
    res.status(500).send({ message: "Internal Server Error" });
    logger_config_1.logger.error("Unhandled error:", err);
};
exports.errorHandler = errorHandler;
