import { Router } from "express";
import { AuthModule } from "./auth.factory";

const authRoutes = Router();
const { controller } = AuthModule.getInstance();

authRoutes.post("/login", controller.login.bind(controller));

export { authRoutes };
