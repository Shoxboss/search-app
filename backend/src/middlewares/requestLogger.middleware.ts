import { Request, Response, NextFunction } from "express";
import { logger } from "../config/logger.config";

export const requestLogger = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  logger.info(`Received ${req.method} request for ${req.url}`);
  next();
};
