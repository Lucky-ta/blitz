"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskController_1 = require("../controllers/taskController");
const taskRouter = (0, express_1.Router)();
taskRouter.get('/tasks', taskController_1.getTasks);
taskRouter.post('/tasks', taskController_1.addTasks);
taskRouter.delete('/tasks/:id', taskController_1.excludeTasks);
exports.default = taskRouter;
