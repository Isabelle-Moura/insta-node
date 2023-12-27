import { Request, Response } from "express";
import { updateUserProfilePic } from "../service/photo.services";

export const uploadProfilePic = async (req: Request, res: Response) => {
   try {
      const { body } = req;
      console.log("req.file:", req.body.file);
      const userId = body._id;
      const fileName = (req.file as Express.Multer.File).filename;
      const mimeType = (req.file as Express.Multer.File).mimetype;

      const photo = await updateUserProfilePic(userId, fileName, mimeType);
      res.status(200).json({ message: "User's photo updated successfully!", photo: photo });
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error at profile's photo upload :/" });
   }
};
