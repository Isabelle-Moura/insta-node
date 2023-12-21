import { Router } from "express";
import { userRouter } from "../modules/user/routes/user.route";
import { authRoutes } from "../auth/auth.route";

export const routes = Router();

routes.use(userRouter);
routes.use(authRoutes);
