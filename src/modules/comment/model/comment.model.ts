import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
   content: { type: String, required: true },
   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
   post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
});

export const CommentModel = mongoose.model("Comment", CommentSchema);
