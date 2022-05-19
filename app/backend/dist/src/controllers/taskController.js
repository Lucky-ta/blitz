"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludeTasks = exports.addTasks = exports.getTasks = void 0;
const taskService_1 = require("../services/taskService");
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, taskService_1.getAllTasks)();
        return res.status(data.status).json(data.response);
    }
    catch (e) {
        return res.status(500).json(e.message);
    }
});
exports.getTasks = getTasks;
const addTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { task } = req.body;
        console.log(task);
        const data = yield (0, taskService_1.setNewTask)(task);
        return res.status(data.status).json(data.response);
    }
    catch (e) {
        return res.status(500).json(e.message);
    }
});
exports.addTasks = addTasks;
const excludeTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const idToNumber = Number(id);
        const data = yield (0, taskService_1.excludeTaskById)(idToNumber);
        return res.status(data.status).json(data.response);
    }
    catch (e) {
        return res.status(500).json(e.message);
    }
});
exports.excludeTasks = excludeTasks;
