import { Request, Response } from "express";
import { makePost, erasePost, getPostById } from "./post.service";

export const makePostController = async (req: Request, res: Response) => {
   try {
      const { content } = req.body;
      const userId = req.user._id; // assuming you have middleware for user authentication

      const post = await makePost(content, userId);
      res.status(201).json(post);
   } catch (error) {
      res.status(500).json({ message: "Error creating post" });
   }
};

export const erasePostController = async (req: Request, res: Response) => {
   try {
      const postId = req.params.postId;
      await erasePost(postId);
      res.json({ message: "Post deleted successfully" });
   } catch (error) {
      res.status(500).json({ message: "Error deleting post" });
   }
};

export const getPostController = async (req: Request, res: Response) => {
   try {
      const postId = req.params.postId;
      const post = await getPostById(postId);

      if (!post) {
         res.status(404).json({ message: "Post not found" });
         return;
      }

      res.json(post);
   } catch (error) {
      res.status(500).json({ message: "Error fetching post" });
   }
};
