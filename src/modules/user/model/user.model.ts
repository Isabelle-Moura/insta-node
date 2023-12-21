import { Schema, model, Document, Types } from "mongoose";

export interface IUser extends Document {
   name: string;
   email: string;
   password: string;
   photo?: string;
}
const UserSchema = new Schema(
   {
      name: { type: String, required: true },
      email: { type: String, unique: true, required: true },
      password: { type: String, required: true },
      photo: { type: Types.ObjectId, ref: "Photo" },
      deletedAt: { type: Date, default: null },
   },
   { timestamps: true }
);

export const UserModel = model<IUser>("User", UserSchema);
