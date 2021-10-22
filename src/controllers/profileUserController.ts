import { Request, Response } from "express";
import { profileUserService } from "../services/profileUserService";

class profileUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;

    const service = new profileUserService();

    const result = await service.execute(user_id);

    return res.json(result);
  }
}

export { profileUserController };
