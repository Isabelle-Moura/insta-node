import { Like, createLike } from "./like.repository";

export const likePost = async (userId: string): Promise<Like> => {
   const like = await createLike(userId);
   return like;
};
