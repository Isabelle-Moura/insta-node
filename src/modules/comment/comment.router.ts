import express from "express";
import { createContentController, getContentController, updateContentController } from "./content.controller";

export const contentRouter = express.Router();

contentRouter.post("/create", createContentController);
contentRouter.patch("/:contentId/update", updateContentController);
contentRouter.get("/:contentId", getContentController);
