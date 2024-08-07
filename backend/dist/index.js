"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const search_route_1 = __importDefault(require("./routes/search.route"));
const logger_config_1 = require("./config/logger.config");
const middlewares_1 = require("./middlewares");
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(cors({
    origin: "http://localhost:8080",
}));
app.use(express_1.default.json());
app.use(middlewares_1.requestLogger);
app.use("/api", search_route_1.default);
app.use(middlewares_1.errorHandler);
app.listen(PORT, () => {
    logger_config_1.logger.info(`Server is running on port ${PORT}`);
});
