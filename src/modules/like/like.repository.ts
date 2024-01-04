import { LikeModel, Like } from "./like.model";

export const createLike = async (userId: string): Promise<Like> => {
   const like = new LikeModel({
      user: userId,
   });

   await like.save();
   return like;
};
