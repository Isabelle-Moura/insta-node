import { UserController } from "../controllers/UserController";
import { UserModel } from "../model/UserModel";
import { UserRepository } from "../repository/UserRepository";
import { UserService } from "../service/UserService";

class UserFactory {
   static makeUser() {
      const repository = new UserRepository(UserModel);
      const service = new UserService(repository);
      const controller = new UserController(service);
      return controller;
   }
}

export const userModule = UserFactory.makeUser();
