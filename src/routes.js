import { Router } from "express";
import authMiddleware from "./app/middlewares/auth";

import SessionController from "./app/controllers/SessionController";
import TaskController from "./app/controllers/TaskController";
import UserController from "./app/controllers/UserController";

const routes = new Router();

routes.post("/users", UserController.store);

routes.post("/sessions", SessionController.store);

// routes below needs to be authenticated
routes.use(authMiddleware);

routes.put("/users", UserController.update);

routes.post("/tasks", TaskController.store);

export default routes;
