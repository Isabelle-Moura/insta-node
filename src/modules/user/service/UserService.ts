import { User } from "../model/UserModel";
import { ICreateUserDto } from "../dto/CreateUserDTO";
import { IUserRepository } from "../repository/UserRepositoryInterface";
import { IUserService } from "./UserServiceInterface";
import bcrypt from "bcrypt";

export class UserService implements IUserService {
   constructor(private repository: IUserRepository) {}
   async create(data: ICreateUserDto): Promise<User> {
      data.password = await this.hashPassword(data.password);
      const user = this.repository.create(data);
      if (!user) {
         throw new Error("It wasn't able to create user. Try again later...");
      }
      return user;
   }
   private async hashPassword(password: string): Promise<string> {
      const loops = 8;
      const hashedPassword = bcrypt.hashSync(password, loops);
      return hashedPassword;
   }
}
