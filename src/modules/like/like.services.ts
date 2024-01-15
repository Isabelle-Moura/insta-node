import { Like } from "./like.model";
import { LikeRepository } from "./like.repository";

export class LikeService {
   constructor(private repository: LikeRepository) {}

   async likePost(postId: string): Promise<Like> {
      const like = await this.repository.createLike(postId);
      return like;
   }
}
