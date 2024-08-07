import { Container } from "inversify";
import { DI_TYPES } from "./types";
import { SearchService } from "../services/search.service";
import { SearchController } from "../controllers/search.controller";
import { logger } from "../config/logger.config";
import { Logger } from "winston";

const container = new Container();

container.bind<SearchService>(DI_TYPES.searchService).to(SearchService);
container
  .bind<SearchController>(DI_TYPES.searchController)
  .to(SearchController);
container.bind<Logger>(DI_TYPES.Logger).toConstantValue(logger);

export default container;
