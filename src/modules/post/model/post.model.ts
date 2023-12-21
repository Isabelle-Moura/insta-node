import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
   content: { type: String, required: true },
   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
   likes: { type: Array, of: mongoose.Schema.Types.ObjectId },
   comments: { type: Array, of: { type: String } },
});

export const PostModel = mongoose.model("Post", PostSchema);
