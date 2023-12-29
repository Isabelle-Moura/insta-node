import { Router } from "express";
import { userRouter } from "../modules/user/user.router";
import { authRoutes } from "../auth/auth.route";
import { photoRouter } from "../modules/photo/photo.router";

export const routes = Router();

routes.use(userRouter); // Todas as rotas de User
routes.use(photoRouter); // Todas as rotas de Photo
routes.use(authRoutes); // Para pegar token ao logar
