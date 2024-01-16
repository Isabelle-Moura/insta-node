import { CreateCommentDTO, UpdateCommentDTO } from "./comment.dto";
import { CommentModel, Comment } from "./comment.model";
import { Model } from "mongoose";

export class CommentRepository {
   constructor(private model: Model<Comment>) {}
   async createComment(comment: CreateCommentDTO): Promise<Comment> {
      const newComment = (await this.model.create(comment)).populate("post");
      return newComment;
   }

   async updateComment(commentId: string, updatedComment: UpdateCommentDTO): Promise<Comment | null> {
      const comment = await this.model.findByIdAndUpdate(
         commentId,
         {
            ...updatedComment,
         },
         { new: true }
      );
      return comment;
   }

   async getCommentById(CommentId: string): Promise<Comment | null> {
      const Comment = await this.model.findById(CommentId);
      return Comment;
   }
}
