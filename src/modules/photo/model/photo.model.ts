import mongoose, { Document, Schema } from "mongoose";

export interface Photo extends Document {
   fileName: string;
   mimeType: string;
}

export const PhotoModel = mongoose.model<Photo>(
   "Photo",
   new Schema<Photo>({
      fileName: { type: String, required: true },
      mimeType: { type: String, required: true },
   })
);
