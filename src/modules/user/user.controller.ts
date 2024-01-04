import { Request, Response } from "express";
import { UserService } from "./user.services";
import { CreateUserDto, UpdateUserDto } from "./user.dto";

export class UserController {
   constructor(private service: UserService) {}

   async createUser(req: Request, res: Response) {
      try {
         const userDto: CreateUserDto = req.body;
         const user = await this.service.registerUser(userDto);
         res.status(201).json(user);
      } catch (error) {
         res.status(500).json({ message: "Error creating user" });
      }
   }

   async updateUserPhoto(req: Request, res: Response) {
      try {
         const userId = req.params.userId;
         const photoId = req.body.photoId;

         const updatedUser = await this.service.updateUserPhoto(userId, photoId);

         if (!updatedUser) {
            res.status(404).json({ message: "User not found" });
            return;
         }

         res.json(updatedUser);
      } catch (error) {
         res.status(500).json({ message: "Error updating user photo" });
      }
   }

   async updateUser(req: Request, res: Response) {
      try {
         const userId = req.params.userId;
         const userDto: UpdateUserDto = req.body;
         const updatedUser = await this.service.modifyUser(userId, userDto);

         if (!updatedUser) {
            res.status(404).json({ message: "User not found" });
            return;
         }

         res.json(updatedUser);
      } catch (error) {
         res.status(500).json({ message: "Error updating user" });
      }
   }

   async deleteUser(req: Request, res: Response) {
      try {
         const userId = req.params.userId;
         await this.service.removeUser(userId);
         res.json({ message: "User deleted successfully" });
      } catch (error) {
         res.status(500).json({ message: "Error deleting user" });
      }
   }

   async getUserProfile(req: Request, res: Response) {
      try {
         const userId = req.params.userId;
         const user = await this.service.getUserProfile(userId);

         if (!user) {
            res.status(404).json({ error: true, message: "User not found", status: 404, meaning: "Not Found" });
            return;
         }

         res.status(200).json(user);
      } catch (error) {
         res.status(500).json({ error: true, message: "Error fetching user profile", status: 404, meaning: "Not Found" });
      }
   }

   async getAllUsers(req: Request, res: Response) {
      try {
         const users = await this.service.getAllUsers();
         res.status(200).json(users);
      } catch (error) {
         res.status(500).json({ message: "Error fetching users" });
      }
   }
}
