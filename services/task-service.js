const taskDao = require('../daos/task-dao');

const createTask = async (key, description, name, input, output, example_1, example_2, example_3) => {
    return await taskDao.createTask(key, description, name, input, output, example_1, example_2, example_3);
};

const getTaskByKey = async (key) => {
    return await taskDao.getTaskByKey(key);
};

const getAllTasks = async () => {
    return await taskDao.getAllTasks();
};

const getTaskByExternalId = async (externalId) => {
    return await taskDao.getTaskByExternalId(externalId);
};

const deleteTask = async (task) => {
    return await taskDao.deleteTask(task);
};

module.exports = {
    createTask,
    getTaskByKey,
    getAllTasks,
    getTaskByExternalId,
    deleteTask
};
