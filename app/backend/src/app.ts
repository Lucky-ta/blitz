import express, { Express } from 'express';
import taskRouter from './routes/taskRouter';
import cors from 'cors'

const app: Express = express();
app.use(cors());
app.use(express.json());

app.use('/', taskRouter);

export default app;
