import { Router } from "express";
import getTasks from "../controllers/taskController";

const taskRouter = Router();

taskRouter.get('/tasks', getTasks );

export default taskRouter