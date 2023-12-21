import mongoose from "mongoose";

const PhotoSchema = new mongoose.Schema({
   url: { type: String, required: true },
});

export const PhotoModel = mongoose.model("Photo", PhotoSchema);
