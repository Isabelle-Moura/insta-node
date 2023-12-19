import { Request, Response } from "express";
import { IUserService } from "../service/UserServiceInterface";
import { validateNewUser } from "../../../middlewares/validate-user.middleware";

export class UserController {
   constructor(private service: IUserService) {}

   async create(req: Request, res: Response) {
      try {
         const { body } = req;
         await validateNewUser.validate(body);
         const user = await this.service.create(body);
         res.status(201).json(user);
      } catch (error: any) {
         res.status(500).json(error);
      }
   }
}
