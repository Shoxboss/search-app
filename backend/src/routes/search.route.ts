import { Router } from "express";
import { SearchController } from "../controllers/search.controller";
import container from "../di/container";
import { DI_TYPES } from "../di/types";

const router = Router();
const searchController = container.get<SearchController>(
  DI_TYPES.searchController
);

router.post(
  "/search",
  async (req, res) => await searchController.search(req, res)
);

export default router;
