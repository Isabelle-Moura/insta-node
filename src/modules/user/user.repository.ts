import { CreateUserDto, UpdateUserDto } from "./user.dto";
import { Model } from "mongoose";
import { UserModel, User } from "./user.model";

export class UserRepository {
   constructor(private model: Model<User>) {}

   async createUser(userDto: CreateUserDto): Promise<User> {
      const user = await this.model.create(userDto);
      return user;
   }

   async updateUserPhoto(userId: string, photoId: string | null): Promise<User | null> {
      const updatedUser = await this.model.findByIdAndUpdate(userId, { photo: photoId }, { new: true });
      return updatedUser;
   }

   async updateUser(userId: string, userDto: UpdateUserDto): Promise<User | null> {
      const updatedUser = await this.model.findByIdAndUpdate(userId, userDto, { new: true });
      return updatedUser;
   }

   async deleteUser(userId: string): Promise<void> {
      await this.model.findByIdAndDelete(userId);
   }

   async findUserById(userId: string): Promise<User | null> {
      const user = await this.model.findById(userId);
      return user;
   }

   async findByEmail(email: string): Promise<User | null> {
      const userEmail = await this.model.findOne({ email });
      return userEmail;
   }

   async getAllUsers(): Promise<User[]> {
      const users = await this.model.find();
      return users;
   }
}
