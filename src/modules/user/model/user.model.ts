import { Schema, model, Document, Types } from "mongoose";
import { Photo } from "../../photo/model/photo.model";

export interface IUser extends Document {
   name: string;
   email: string;
   password: string;
   profilePic?: Photo | string;
}
const UserSchema = new Schema(
   {
      name: { type: String, required: true },
      email: { type: String, unique: true, required: true },
      password: { type: String, required: true },
      profilePic: { type: Schema.Types.ObjectId, ref: "Photo" },
      deletedAt: { type: Date, default: null },
   },
   { timestamps: true }
);

export const UserModel = model<IUser>("User", UserSchema);
