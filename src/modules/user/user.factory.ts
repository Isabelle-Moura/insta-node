import { UserController } from "./user.controller";
import { UserModel } from "./user.model";
import { UserRepository } from "./user.repository";
import { UserService } from "./user.services";

class UserFactory {
   static initialize() {
      const repository = new UserRepository(UserModel);
      const service = new UserService(repository);
      const controller = new UserController(service);
      return controller;
   }
}

export const userFactory = UserFactory.initialize();
