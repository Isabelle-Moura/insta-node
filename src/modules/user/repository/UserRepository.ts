import { Model } from "mongoose";
import { User } from "../model/UserModel";
import { IUserRepository } from "./UserRepositoryInterface";
import { ICreateUserDto } from "../dto/CreateUserDTO";

export class UserRepository implements IUserRepository {
   constructor(private model: Model<User>) {}

   async create(data: ICreateUserDto): Promise<User> {
      const user = new this.model(data);
      if (!user) {
         throw new Error("It wasn't able to create user. Try again later...");
      }
      return user;
   }

   async findByEmail(email: string): Promise<User> {
      const user = await this.model.findOne({ email });
      if (!user) {
         throw new Error("User not found...");
      }
      return user;
   }

   async findById(id: string): Promise<User> {
      const user = await this.model.findById(id);
      if (!user) {
         throw new Error("User not found...");
      }
      return user;
   }
}
