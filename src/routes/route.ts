import { Router } from "express";
import { userRouter } from "../modules/user/user.router";
import { authRoutes } from "../auth/auth.route";
import { photoRouter } from "../modules/photo/photo.router";
import { postRouter } from "../modules/post/post.router";
import { likeRouter } from "../modules/like/like.router";

export const routes = Router();

routes.use(userRouter); // Todas as rotas de User
routes.use(photoRouter); // Todas as rotas de Photo
routes.use(authRoutes); // Para pegar token ao logar
routes.use(postRouter); // Todas as rotas de Post
routes.use(likeRouter); // Todas as rotas de Like
