const { Task } = require('../../models')

const getAllTasks = async() => {
    const tasks = await Task.findAll();
    if (tasks !== null) {
        return { status: 200, response: tasks }
    } return { status: 404, response: { message: 'ERROR' }}
}

export default getAllTasks;