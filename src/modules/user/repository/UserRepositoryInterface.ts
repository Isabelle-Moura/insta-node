import { ICreateUserDto } from "../dto/CreateUserDTO";
import { User } from "../model/UserModel";

export interface IUserRepository {
   create(data: ICreateUserDto): Promise<User>;
   findByEmail(email: string): Promise<User>;
   findById(id: string): Promise<User>;
}
