import { Schema, Model, model, InferSchemaType, Types } from "mongoose";

const userSchema = new Schema(
   {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      photo: { type: Types.ObjectId, ref: "Photo" },
      deletedAt: { type: Date, default: null },
   },
   { timestamps: true }
);

export type User = InferSchemaType<typeof userSchema>;

export const UserModel: Model<User> = model("User", userSchema);
