import { PostRepository } from "./post.repository";
import { Post } from "./post.model";

export class PostService {
   constructor(private repository: PostRepository) {}

   async makePost(content: string, userId: string): Promise<Post> {
      const post = await this.repository.createPost(content, userId);
      return post;
   }

   async erasePost(postId: string): Promise<void> {
      await this.repository.deletePost(postId);
   }

   async getPostById(postId: string): Promise<Post | null> {
      const post = await this.repository.findPostById(postId);
      return post;
   }
}
