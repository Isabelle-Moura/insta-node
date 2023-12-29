import mongoose, { Document, Schema } from "mongoose";
import { Photo } from "../photo/photo.model";

export interface User extends Document {
   name: string;
   email: string;
   password: string;
   photo: mongoose.Types.ObjectId | string | Photo | null;
}

const userSchema = new Schema<User>(
   {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      photo: { type: mongoose.Types.ObjectId, ref: "Photo", default: null },
   },
   { timestamps: true }
);

export const UserModel = mongoose.model<User>("User", userSchema);
