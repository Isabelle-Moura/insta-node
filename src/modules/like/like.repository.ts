import { Like } from "./like.model";
import { Model } from "mongoose";

export class LikeRepository {
   constructor(private model: Model<Like>) {}

   async createLike(postId: string): Promise<Like> {
      const like = await this.model.create({
         post: postId,
      });
      return like;
   }
}
