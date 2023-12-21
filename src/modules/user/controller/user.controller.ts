import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../../../configs/env";
import { UserService } from "../service/user.services";

export class UserController {
   constructor(private service: UserService) {}

   async create(req: Request, res: Response) {
      const user = await this.service.create(req.body);

      res.status(201).json(user);
   }
}

export default UserController;
