import multer from "multer";
import { Request, Response } from "express";
import { PhotoService } from "./photo.services";
import { CreatePhotoDto } from "./photo.dto";

// Multer configuration
const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, "uploads/"); // Destination folder for storing files
   },
   filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg"); // Naming convention for files
   },
});

const upload = multer({ storage: storage });

export class PhotoController {
   constructor(private service: PhotoService) {}
   static uploadPhoto = upload.single("photo"); // "photo" should match the field name in your form

   async createPhoto(req: Request, res: Response) {
      try {
         const { file } = req;
         if (!file) {
            throw new Error(`There's no such file.`);
         }
         const userId = req.params.userId;
         const photoDto: CreatePhotoDto = {
            fileName: file.filename,
            mimeType: file.mimetype,
            user: userId,
         };

         const photo = await this.service.createPhoto(photoDto);
         res.status(201).json(photo);
      } catch (error) {
         res.status(500).json({ message: "Error creating photo" });
      }
   }
}
