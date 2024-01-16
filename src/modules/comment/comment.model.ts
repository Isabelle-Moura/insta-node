import mongoose, { Document, Schema } from "mongoose";

export interface Comment extends Document {
   text: string;
   post: Schema.Types.ObjectId | null;
}

export const CommentModel = mongoose.model<Comment>(
   "Comment",
   new Schema<Comment>({
      text: { type: String, required: true },
      post: { type: Schema.Types.ObjectId, ref: "Post" },
   })
);
