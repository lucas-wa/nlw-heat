import { Request, Response } from "express";
import { getLast3MessagesService } from "../services/getLast3Messages";

class getLast3MessagesController {
  async handle(req: Request, res: Response) {
    const service = new getLast3MessagesService();

    const result = await service.execute();

    return res.json(result);
  }
}

export { getLast3MessagesController };
