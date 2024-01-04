import { Request, Response } from "express";
import { PostService } from "./post.services";

export class PostController {
   constructor(private service: PostService) {}

   async makePostController(req: Request, res: Response) {
      try {
         const { content } = req.body;
         const userId = req.body.user._id;

         const post = await this.service.makePost(content, userId);
         res.status(201).json(post);
      } catch (error) {
         res.status(500).json({ message: "Error creating post" });
      }
   }

   async erasePostController(req: Request, res: Response) {
      try {
         const postId = req.params.postId;
         await this.service.erasePost(postId);
         res.json({ message: "Post deleted successfully" });
      } catch (error) {
         res.status(500).json({ message: "Error deleting post" });
      }
   }

   async getPostController(req: Request, res: Response) {
      try {
         const postId = req.params.postId;
         const post = await this.service.getPostById(postId);

         if (!post) {
            res.status(404).json({ message: "Post not found" });
            return;
         }

         res.json(post);
      } catch (error) {
         res.status(500).json({ message: "Error fetching post" });
      }
   }
}
