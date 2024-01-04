import express from "express";
import { likePostController } from "./like.controller";
import { checkAuthorization } from "../../../middlewares/validate-profile-photo.middleware";

export const likeRouter = express.Router();

likeRouter.post("/", checkAuthorization, likePostController);
