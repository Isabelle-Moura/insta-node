import { ICreateUserDto } from "../dto/CreateUserDTO";
import { User } from "../model/UserModel";

export interface IUserService {
   create(data: ICreateUserDto): Promise<User>;
}
