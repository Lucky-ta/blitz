"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskController_1 = require("../controllers/taskController");
const taskRouter = (0, express_1.Router)();
taskRouter.get('/', taskController_1.getTasks);
taskRouter.post('/', taskController_1.addTasks);
taskRouter.delete('/:id', taskController_1.excludeTasks);
exports.default = taskRouter;
