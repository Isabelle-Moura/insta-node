import { PostModel, Post } from "./post.model";

export const createPost = async (content: string, userId: string): Promise<Post> => {
   const post = new PostModel({
      content,
      user: userId,
      likes: [],
      comments: [],
   });

   await post.save();
   return post;
};

export const deletePost = async (postId: string): Promise<void> => {
   await PostModel.findByIdAndDelete(postId);
};

export const findPostById = async (postId: string): Promise<Post | null> => {
   const post = await PostModel.findById(postId);
   return post;
};
