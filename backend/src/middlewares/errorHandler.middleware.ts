import { Request, Response } from "express";
import { logger } from "../config/logger.config";

export const errorHandler = (err: Error, _req: Request, res: Response) => {
  res.status(500).send({ message: "Internal Server Error" });
  logger.error("Unhandled error:", err);
};
