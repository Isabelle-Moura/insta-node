import { UserRepository } from "./user.repository";
import * as DTO from "./user.dto";
import { User } from "./user.model";
import { hash } from "bcrypt";

export class UserService {
   constructor(private repository: UserRepository) {}

   async registerUser(userDto: DTO.CreateUserDto): Promise<User> {
      const userAlreadyExists = await this.repository.findByEmail(userDto.email);
      if (userAlreadyExists) {
         throw { error: true, message: "This user already exists. Try putting another credentials.", status: 409 };
      }

      const payload = {
         ...userDto,
         password: await hash(userDto.password, 10),
      };

      const result = await this.repository.createUser(payload);

      return result;
   }

   async updateUserPhoto(userId: string, photoId: string | null): Promise<User | null> {
      const updatedUser = await this.repository.updateUserPhoto(userId, photoId);
      return updatedUser;
   }

   async modifyUser(userId: string, userDto: DTO.UpdateUserDto): Promise<User | null> {
      const updatedUser = await this.repository.updateUser(userId, userDto);
      return updatedUser;
   }

   async removeUser(userId: string): Promise<void> {
      await this.repository.deleteUser(userId);
   }

   async getUserProfile(userId: string): Promise<User | null> {
      const user = await this.repository.findUserById(userId);
      return user;
   }

   async getAllUsers(): Promise<User[]> {
      const users = await this.repository.getAllUsers();
      return users;
   }
}
