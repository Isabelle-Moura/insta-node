import mongoose, { Document, Schema } from "mongoose";

export interface Photo extends Document {
   fileName: string;
   mimeType: string;
   user?: mongoose.Types.ObjectId;
}

const photoSchema = new Schema<Photo>({
   fileName: { type: String, required: true },
   mimeType: { type: String, required: true },
   user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

export const PhotoModel = mongoose.model<Photo>("Photo", photoSchema);
