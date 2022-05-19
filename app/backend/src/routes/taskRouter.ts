import { Router } from 'express';
import { addTasks, excludeTasks, getTasks } from '../controllers/taskController';

const taskRouter = Router();

taskRouter.get('/tasks', getTasks);
taskRouter.post('/tasks', addTasks);
taskRouter.delete('/tasks/:id', excludeTasks);

export default taskRouter;
