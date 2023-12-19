import { Router } from "express";
import { userRouter } from "../modules/user/routes/userRoute";

export const routes = Router();

routes.use(userRouter);
