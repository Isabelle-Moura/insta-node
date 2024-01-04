import express from "express";
import { makePostController, erasePostController, getPostController } from "./post.controller";
import { checkAuthorization } from "../../../middlewares/validate-profile-photo.middleware";

export const postRouter = express.Router();

postRouter.post("/posts", checkAuthorization, makePostController);
postRouter.delete("/posts/:postId", checkAuthorization, erasePostController);
postRouter.get("/posts/:postId", getPostController);
