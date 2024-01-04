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
      user: { type: Schema.Types.ObjectId, ref: "User", required: true },
      likes: [{ type: Schema.Types.ObjectId, ref: "Like" }],
      comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
   },
   { timestamps: true }
);

export const PostModel = mongoose.model<Post>("Post", postSchema);
