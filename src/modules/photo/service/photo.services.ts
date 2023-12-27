import { UserModel } from "../../user/model/user.model";
import { PhotoModel } from "../model/photo.model";

export const createPhoto = async (fileName: string, mimeType: string) => {
   try {
      const photo = new PhotoModel({
         fileName,
         mimeType,
      });

      await photo.save();
      return photo;
   } catch (error) {
      throw new Error("Error at creating photo. Try again.");
   }
};

export const updateUserProfilePic = async (userId: string, fileName: string, mimeType: string) => {
   try {
      const photo = await createPhoto(fileName, mimeType);
      const user = await UserModel.findByIdAndUpdate(userId, {
         profilePic: photo._id,
      });

      return user;
   } catch (error) {
      throw new Error(`Error at profile's picture update.`);
   }
};
