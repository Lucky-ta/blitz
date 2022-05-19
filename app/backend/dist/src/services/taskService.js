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
exports.excludeTaskById = exports.setNewTask = exports.getAllTasks = void 0;
const { Task } = require('../../models');
const getAllTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield Task.findAll();
    if (tasks !== null) {
        return { status: 200, response: tasks };
    }
    return { status: 404, response: { message: 'ERROR' } };
});
exports.getAllTasks = getAllTasks;
const setNewTask = (task) => __awaiter(void 0, void 0, void 0, function* () {
    const newTask = yield Task.create({ task });
    if (newTask !== null) {
        return { status: 201, response: newTask };
    }
    return { status: 404, response: { message: 'ERROR' } };
});
exports.setNewTask = setNewTask;
const excludeTaskById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteTask = yield Task.destroy({ where: { id } });
    return { status: 200, response: deleteTask };
});
exports.excludeTaskById = excludeTaskById;
