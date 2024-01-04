import mongoose, { Document, Schema } from "mongoose";

export interface Like extends Document {
   user: mongoose.Types.ObjectId;
}

const likeSchema = new Schema<Like>({
   user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export const LikeModel = mongoose.model<Like>("Like", likeSchema);
