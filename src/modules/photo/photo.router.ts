import express from "express";
import { PhotoController } from "./photo.controller";
import { photoFactory } from "./photo.factory";

export const photoRouter = express.Router();

photoRouter.post("/user-photo/:userId/upload", PhotoController.uploadPhoto, photoFactory.createPhoto.bind(photoFactory));
