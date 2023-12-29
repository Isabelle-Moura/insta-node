import { CreatePhotoDto } from "./photo.dto";
import { Photo } from "./photo.model";
import { PhotoRepository } from "./photo.repository";

export class PhotoService {
   constructor(private repository: PhotoRepository) {}
   async createPhoto(photoDto: CreatePhotoDto): Promise<Photo> {
      const photo = await this.repository.createPhoto(photoDto);
      return photo;
   }
}
