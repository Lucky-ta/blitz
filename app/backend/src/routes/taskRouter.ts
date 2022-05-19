import { Router } from "express";
import  { addTasks, getTasks } from "../controllers/taskController";

const taskRouter = Router();

taskRouter.get('/tasks', getTasks );
taskRouter.post('/tasks', addTasks );

export default taskRouter