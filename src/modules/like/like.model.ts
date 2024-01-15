import mongoose, { Document, Schema } from "mongoose";

export interface Like extends Document {
   post: Schema.Types.ObjectId;
}

const likeSchema = new Schema<Like>({
   post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
});

export const LikeModel = mongoose.model<Like>("Like", likeSchema);
