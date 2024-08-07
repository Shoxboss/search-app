import { inject, injectable } from "inversify";
import { DI_TYPES } from "../di/types";
import { SearchService } from "../services/search.service";
import { Logger } from "winston";
import type { Request, Response } from "express";

@injectable()
export class SearchController {
  constructor(
    @inject(DI_TYPES.searchService) private _searchService: SearchService,
    @inject(DI_TYPES.Logger) private _logger: Logger
  ) {}

  async search(req: Request, res: Response) {
    try {
      const { email, number } = req.body;
      const result = await this._searchService.search(email, number);
      res.json(result);
      this._logger.info(`found successfully`);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
      this._logger.error("Error searching:", error);
    }
  }
}
