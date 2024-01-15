import { Comment, CommentModel } from "./comment.model";
import { CreateCommentDTO, UpdateCommentDTO } from "./comment.dto";
import { CommentRepository } from "./comment.repository";

export class CommentService {
   constructor(private repository: CommentRepository) {}

   async createCommentService(comment: CreateCommentDTO): Promise<Comment> {
      const newComment = await this.repository.createComment(comment);
      return newComment;
   }

   async updateCommentService(commentId: string, updatedComment: UpdateCommentDTO): Promise<Comment | null> {
      const comment = await this.repository.updateComment(commentId, updatedComment);
      return comment;
   }

   async getCommentService(commentId: string): Promise<Comment | null> {
      const comment = await this.repository.getCommentById(commentId);
      return comment;
   }
}
