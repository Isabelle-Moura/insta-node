import { createPost, deletePost, findPostById } from "./post.repository";
import { Post } from "./post.model";

export const makePost = async (content: string, userId: string): Promise<Post> => {
   const post = await createPost(content, userId);
   return post;
};

export const erasePost = async (postId: string): Promise<void> => {
   await deletePost(postId);
};

export const getPostById = async (postId: string): Promise<Post | null> => {
   const post = await findPostById(postId);
   return post;
};
