"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const types_1 = require("./types");
const search_service_1 = require("../services/search.service");
const search_controller_1 = require("../controllers/search.controller");
const logger_config_1 = require("../config/logger.config");
const container = new inversify_1.Container();
container.bind(types_1.DI_TYPES.searchService).to(search_service_1.SearchService);
container
    .bind(types_1.DI_TYPES.searchController)
    .to(search_controller_1.SearchController);
container.bind(types_1.DI_TYPES.Logger).toConstantValue(logger_config_1.logger);
exports.default = container;
