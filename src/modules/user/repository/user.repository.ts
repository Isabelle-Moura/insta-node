import { CreateUserDTO } from "../dto/user.dto";
import { UserModel } from "../model/user.model";

export class UserRepository {
   constructor(private model: typeof UserModel) {}

   async create(user: CreateUserDTO) {
      return await this.model.create(user);
   }

   async findByEmail(email: string) {
      return await this.model.findOne({ email });
   }
}
