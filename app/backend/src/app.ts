import express, { Express } from 'express';
import taskRouter from './routes/taskRouter';

const app: Express = express();

app.use(express.json());

app.use('/', taskRouter);

export default app;
