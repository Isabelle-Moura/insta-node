import { Post } from "./post.model";
import { Model } from "mongoose";

export class PostRepository {
   constructor(private model: Model<Post>) {}
   async createPost(content: string, userId: string): Promise<Post> {
      const post = await (
         await this.model.create({
            content,
            user: userId,
            likes: [],
            comments: [],
         })
      ).populate("user");
      return post;
   }

   async deletePost(postId: string): Promise<void> {
      await this.model.findByIdAndDelete(postId);
   }

   async findPostById(postId: string): Promise<Post | null> {
      const post = await this.model.findById(postId);
      return post;
   }
}
