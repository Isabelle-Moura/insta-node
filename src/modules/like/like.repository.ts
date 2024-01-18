import { PostModel } from "../post/post.model";
import { Like } from "./like.model";
import { Model } from "mongoose";

export class LikeRepository {
   constructor(private model: Model<Like>) {}

   async createLike(postId: string): Promise<Like> {
      // Cria um novo like
      const like = await this.model.create({
         post: postId,
      });

      // Atualiza o post associado com o novo like usando $push
      await PostModel.findByIdAndUpdate(postId, { $push: { likes: like } }, { new: true });

      return like;
   }
}
