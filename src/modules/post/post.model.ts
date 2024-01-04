import mongoose, { Document, Schema } from "mongoose";

export interface Post extends Document {
   content: string;
   user: mongoose.Types.ObjectId;
   likes: mongoose.Types.ObjectId[];
   comments: mongoose.Types.ObjectId[];
}
const postSchema = new Schema<Post>(
   {
      content: { type: String, required: true },
      user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
      likes: [{ type: mongoose.Types.ObjectId, ref: "Like" }],
      comments: [{ type: mongoose.Types.ObjectId, ref: "Comment" }],
   },
   { timestamps: true }
);

export const PostModel = mongoose.model<Post>("Post", postSchema);
