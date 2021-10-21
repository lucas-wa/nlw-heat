import { Request, Response } from "express";

class createMessageController {
  async handle(req: Request, res: Response) {
    const { text } = req.body;
  }
}

export { createMessageController };
