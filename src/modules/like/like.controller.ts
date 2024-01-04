import { Request, Response } from "express";
import { likePost } from "./like.service";

export const likePostController = async (req: Request, res: Response) => {
   try {
      const userId = req.user._id; // assuming you have middleware for user authentication
      const like = await likePost(userId);
      res.json(like);
   } catch (error) {
      res.status(500).json({ message: "Error liking post" });
   }
};
