import "reflect-metadata";
import express from "express";
import routes from "./routes/search.route";
import { logger } from "./config/logger.config";
import { requestLogger, errorHandler } from "./middlewares";
import cors from "cors";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(requestLogger);
app.use("/api", routes);

app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
