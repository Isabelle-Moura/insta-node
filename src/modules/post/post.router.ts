import express from "express";
import { postFactory } from "./post.factory";
import { checkAuthorization } from "../../middlewares/validate-profile-photo.middleware";

export const postRouter = express.Router();

postRouter.post("/posts", checkAuthorization, postFactory.makePostController.bind(postFactory));
postRouter.delete("/posts/:postId", checkAuthorization, postFactory.erasePostController.bind(postFactory));
postRouter.get("/posts/:postId", postFactory.getPostController.bind(postFactory));
