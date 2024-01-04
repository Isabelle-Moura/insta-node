import { Request, Response } from "express";
import { LikeService } from "./like.services";

export class LikeController {
   constructor(private service: LikeService) {}

   async likePostController(req: Request, res: Response) {
      try {
         const userId = req.body.user._id;
         const like = await this.service.likePost(userId);
         res.status(200).json({ message: "Your post received a like!", like });
      } catch (error) {
         res.status(500).json({ message: "Error liking post" });
      }
   }
}
