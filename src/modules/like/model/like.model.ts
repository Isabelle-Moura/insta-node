import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema({
   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
   post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
});

export const LikeModel = mongoose.model("Like", LikeSchema);
