const injector = require(require('path').dirname(require.main.filename) + '/injector');

const taskDAO = injector.injectObject(injector.objectType.DAO,'TaskDAO');

const createTask = async (key, description, name, input, output, example_1, example_2, example_3) => {
    return await taskDAO.createTask(key, description, name, input, output, example_1, example_2, example_3);
};

const getTaskByKey = async (key) => {
    return await taskDAO.getTaskByKey(key);
};

const getAllTasks = async () => {
    return await taskDAO.getAllTasks();
};

const getTaskByExternalId = async (externalId) => {
    return await taskDAO.getTaskByExternalId(externalId);
};

const deleteTask = async (task) => {
    return await taskDAO.deleteTask(task);
};

module.exports = {
    createTask,
    getTaskByKey,
    getAllTasks,
    getTaskByExternalId,
    deleteTask
};
