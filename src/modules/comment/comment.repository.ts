import { PostModel } from "../post/post.model";
import { CreateCommentDTO, UpdateCommentDTO } from "./comment.dto";
import { CommentModel, Comment } from "./comment.model";
import { Model } from "mongoose";

export class CommentRepository {
   constructor(private model: Model<Comment>) {}

   async createComment(comment: CreateCommentDTO): Promise<Comment | null> {
      // Cria um novo comentário
      const newComment = await this.model.create(comment);

      // Atualiza o post associado com o novo comentário usando $push
      await PostModel.findByIdAndUpdate(
         newComment.post, // Supondo que há um campo 'post' no modelo Comment que armazena o ID do post
         { $push: { comments: newComment } },
         { new: true }
      );

      // Use populate para preencher os detalhes do post no novo comentário
      const populatedComment = await this.model.findById(newComment._id).populate("post");

      return populatedComment;
   }

   async updateComment(commentId: string, updatedComment: UpdateCommentDTO): Promise<Comment | null> {
      const updatedCommentDocument = await this.model.findByIdAndUpdate(commentId, { $push: { comments: updatedComment } }, { new: true });

      return updatedCommentDocument;
   }

   async getCommentById(commentId: string): Promise<Comment | null> {
      const comment = await this.model.findById(commentId);
      return comment;
   }
}
