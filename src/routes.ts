import { Router } from "express";
import { authenticateUserController } from "./controllers/authenticateUserController";
import { createMessageController } from "./controllers/createMessageController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new authenticateUserController().handle);

router.post(
  "/messages",
  ensureAuthenticated,
  new createMessageController().handle
);

export { router };
