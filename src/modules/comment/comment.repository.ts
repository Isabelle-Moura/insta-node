import { CreateCommentDTO, UpdateCommentDTO } from "./comment.dto";
import { CommentModel, Comment } from "./comment.model";
import { Model } from "mongoose";

export class CommentRepository {
   constructor(private model: Model<Comment>) {}
   async createComment(comment: CreateCommentDTO): Promise<Comment> {
      const newComment = this.model.create(comment);
      return newComment;
   }

   async updateComment(CommentId: string, updatedComment: UpdateCommentDTO): Promise<Comment | null> {
      const Comment = await this.model.findByIdAndUpdate(
         CommentId,
         {
            ...updatedComment,
         },
         { new: true }
      );
      return Comment;
   }

   async getCommentById(CommentId: string): Promise<Comment | null> {
      const Comment = await this.model.findById(CommentId);
      return Comment;
   }
}
