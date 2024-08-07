import { createLogger, format, transports } from "winston";
import path from "path";

const { combine, timestamp, printf, colorize, json } = format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

export const logger = createLogger({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  format: combine(
    timestamp(),
    process.env.NODE_ENV === "production" ? json() : logFormat
  ),
  transports: [
    new transports.File({
      filename: path.join(__dirname, "../../", "logs/error.log"),
      level: "error",
    }),
    new transports.File({
      filename: path.join(__dirname, "../../", "logs/combined.log"),
    }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: combine(colorize(), logFormat),
    })
  );
}
