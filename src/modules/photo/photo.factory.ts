import { PhotoController } from "./photo.controller";
import { PhotoModel } from "./photo.model";
import { PhotoRepository } from "./photo.repository";
import { PhotoService } from "./photo.services";

class PhotoFactory {
   static initialize() {
      const repository = new PhotoRepository(PhotoModel);
      const service = new PhotoService(repository);
      const controller = new PhotoController(service);
      return controller;
   }
}

export const photoFactory = PhotoFactory.initialize();
