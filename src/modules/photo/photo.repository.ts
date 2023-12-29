import { CreatePhotoDto } from "./photo.dto";
import { Photo } from "./photo.model";
import { Model } from "mongoose";

export class PhotoRepository {
   constructor(private model: Model<Photo>) {}

   async createPhoto(photoDto: CreatePhotoDto): Promise<Photo> {
      const photo = this.model.create(photoDto);
      return photo;
   }
}
