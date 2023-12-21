import { UserModel } from "../modules/user/model/user.model";
import { UserRepository } from "../modules/user/repository/user.repository";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.services";

export class AuthModule {
   static getInstance() {
      const repository = new UserRepository(UserModel);
      const service = new AuthService(repository);
      const controller = new AuthController(service);
      return { service, controller };
   }
}
