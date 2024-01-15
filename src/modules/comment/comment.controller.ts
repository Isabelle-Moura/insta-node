import { Request, Response } from "express";
import { CommentService } from "./comment.services";
import { CreateCommentDTO, UpdateCommentDTO } from "./comment.dto";

export class CommentController {
   constructor(private service: CommentService) {}

   async createCommentController(req: Request, res: Response) {
      try {
         const commentDTO: CreateCommentDTO = req.body;
         const newComment = await this.service.createCommentService(commentDTO);
         res.status(201).json(newComment);
      } catch (error) {
         res.status(500).json({ message: "Error creating comment" });
      }
   }

   async updateCommentController(req: Request, res: Response) {
      try {
         const commentId = req.params.commentId;
         const updatedCommentDTO: UpdateCommentDTO = req.body;
         const updatedComment = await this.service.updateCommentService(commentId, updatedCommentDTO);
         res.status(200).json(updatedComment);
      } catch (error) {
         res.status(500).json({ message: "Error updating comment" });
      }
   }

   async getCommentController(req: Request, res: Response) {
      try {
         const commentId = req.params.commentId;
         const comment = await this.service.getCommentService(commentId);
         if (!comment) {
            res.status(404).json({ message: "Comment not found" });
         } else {
            res.status(200).json(comment);
         }
      } catch (error) {
         res.status(500).json({ message: "Error fetching comment" });
      }
   }
}
