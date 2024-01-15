import { CommentController } from "./comment.controller";
import { CommentModel } from "./comment.model";
import { CommentRepository } from "./comment.repository";
import { CommentService } from "./comment.services";

class CommentFactory {
   static makeComment() {
      const repository = new CommentRepository(CommentModel);
      const service = new CommentService(repository);
      const controller = new CommentController(service);
      return controller;
   }
}

export const commentFactory = CommentFactory.makeComment();
