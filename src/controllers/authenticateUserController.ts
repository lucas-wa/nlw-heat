import { Request, Response } from "express";
import { authenticateUserService } from "../services/authenticateUserService";

class authenticateUserController {
  async handle(req: Request, res: Response) {
    const { code } = req.body;

    const service = new authenticateUserService();

    try {
      const result = await service.execute(code);
      return res.json(result);
    } catch (err) {
      return res.json({ error: err.message });
    }
  }
}

export { authenticateUserController };
