import { Router } from 'express';
import { addTasks, excludeTasks, getTasks } from '../controllers/taskController';

const taskRouter = Router();

taskRouter.get('/', getTasks);
taskRouter.post('/', addTasks);
taskRouter.delete('/:id', excludeTasks);

export default taskRouter;
