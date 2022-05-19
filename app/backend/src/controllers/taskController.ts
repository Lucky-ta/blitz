import { Response, Request } from "express";
import getAllTasks from "../services/taskService";

const getTasks = async(req: Request, res: Response) => {
    try {
        const data = await getAllTasks();
        return res.status(data.status).json(data.response);
    } catch (e: any) {
        return res.status(500).json(e.message)
    }
}

export default getTasks