import express from "express";
import { userFactory } from "./user.factory";

export const userRouter = express.Router();

userRouter.post("/user/new-user", userFactory.createUser.bind(userFactory));
userRouter.patch("/user/:userId", userFactory.updateUser.bind(userFactory));
userRouter.patch("/user/:userId/update-photo", userFactory.updateUserPhoto.bind(userFactory));
userRouter.delete("/user/:userId", userFactory.deleteUser.bind(userFactory));
userRouter.get("/user/:userId", userFactory.getUserProfile.bind(userFactory));
userRouter.get("/users", userFactory.getAllUsers.bind(userFactory));
