import express from "express";
import { likeFactory } from "./like.factory";
import { checkAuthorization } from "../../middlewares/validate-profile-photo.middleware";

export const likeRouter = express.Router();

likeRouter.post("/posts/:postId", checkAuthorization, likeFactory.likePostController.bind(likeFactory));
