import { UserController } from "../controller/user.controller";
import { UserModel } from "../model/user.model";
import { UserRepository } from "../repository/user.repository";
import { UserService } from "../service/user.services";

export class UserFactory {
   static makeUser() {
      const repository = new UserRepository(UserModel);
      const service = new UserService(repository);
      const controller = new UserController(service);
      return controller;
   }
}
