import { LikeController } from "./like.controller";
import { LikeModel } from "./like.model";
import { LikeRepository } from "./like.repository";
import { LikeService } from "./like.services";

class LikeFactory {
   static makeLike() {
      const repository = new LikeRepository(LikeModel);
      const service = new LikeService(repository);
      const controller = new LikeController(service);
      return controller;
   }
}

export const likeFactory = LikeFactory.makeLike();
