import { Response, Request } from "express";
import { getAllTasks, setNewTask } from "../services/taskService";

export const getTasks = async(req: Request, res: Response) => {
    try {
        const data = await getAllTasks();
        return res.status(data.status).json(data.response);
    } catch (e: any) {
        return res.status(500).json(e.message)
    }
}

export const addTasks = async(req: Request, res: Response) => {
    try {
        const {task} = req.body;
        console.log(task);
        
        const data = await setNewTask(task);
        return res.status(data.status).json(data.response);
    } catch (e: any) {
        return res.status(500).json(e.message)
    }
}