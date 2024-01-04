import { PostController } from "./post.controller";
import { PostModel } from "./post.model";
import { PostRepository } from "./post.repository";
import { PostService } from "./post.services";

class PostFactory {
   static makePost() {
      const repository = new PostRepository(PostModel);
      const service = new PostService(repository);
      const controller = new PostController(service);
      return controller;
   }
}

export const postFactory = PostFactory.makePost();
