import { Router } from "express";
import { UserFactory } from "../factory/user.factory";

export const userRouter = Router();
const userModule = UserFactory.makeUser();

userRouter.post("/users/register", userModule.create.bind(userModule));
