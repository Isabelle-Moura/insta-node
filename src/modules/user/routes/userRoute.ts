import { Router } from "express";
import { userModule } from "../factory/UserFactory";

export const userRouter = Router();

userRouter.post("/users", userModule.create.bind(userModule));
