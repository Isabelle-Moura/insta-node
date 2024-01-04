import mongoose, { Document, Schema } from "mongoose";

export interface Content extends Document {
   text: string;
   user: Schema.Types.ObjectId | null;
}

export const ContentModel = mongoose.model<Content>(
   "Content",
   new Schema<Content>({
      text: { type: String, required: true },
      user: { type: mongoose.Types.ObjectId, ref: "User" },
   })
);
