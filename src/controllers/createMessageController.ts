import { request, Request, response, Response } from "express";
import { createMessageService } from "../services/createMessageService";

class createMessageController {
  async handle(req: Request, res: Response) {
    const { message } = req.body;
    const { user_id } = request;

    const service = new createMessageService();

    const result = await service.execute(message, user_id);

    return response.json(result);
  }
}

export { createMessageController };
