const { Task } = require('../../models');

export const getAllTasks = async () => {
  const tasks = await Task.findAll();
  if (tasks !== null) {
    return { status: 200, response: tasks };
  } return { status: 404, response: { message: 'ERROR' } };
};

export const setNewTask = async (task: string) => {
  const newTask = await Task.create({ task });
  if (newTask !== null) {
    return { status: 201, response: newTask };
  } return { status: 404, response: { message: 'ERROR' } };
};

export const excludeTaskById = async (id: number) => {
  const deleteTask = await Task.destroy({ where: { id } });
  return { status: 200, response: deleteTask };
};
