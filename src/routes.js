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

routes.get("/tasks", TaskController.index);
routes.post("/tasks", TaskController.store);
routes.put("/tasks/:task_id", TaskController.update);

export default routes;
