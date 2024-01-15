import express from "express";
import { commentFactory } from "./comment.factory";

export const commentRouter = express.Router();

commentRouter.post("/create", commentFactory.createCommentController.bind(commentFactory));
commentRouter.patch("/:commentId/update", commentFactory.updateCommentController.bind(commentFactory));
commentRouter.get("/:commentId", commentFactory.getCommentController.bind(commentFactory));
