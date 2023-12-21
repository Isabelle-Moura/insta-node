import { hash } from "bcrypt";
import { CreateUserDTO } from "../dto/user.dto";
import { IUser } from "../model/user.model";
import { UserRepository } from "../repository/user.repository";

export interface CreateUserResponse {
   error: boolean;
   message: string;
   status: number;
}

export class UserService {
   constructor(private repository: UserRepository) {}

   async create(user: CreateUserDTO): Promise<CreateUserResponse | IUser> {
      const userAlreadyExists = await this.repository.findByEmail(user.email);
      if (userAlreadyExists) {
         throw { error: true, message: "This user already exists. Try putting another credentials.", status: 409 };
      }

      const payload = {
         ...user,
         password: await hash(user.password, 10),
      };

      const result = await this.repository.create(payload);

      return result;
   }
}
