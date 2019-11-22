const injector = require(require("path").dirname(require.main.filename) + "/injector");

const taskService = injector.inject_service("TaskService");
const errorsConsts = injector.inject_const_file("Errors");

const createTask = async (key, description, name) => {
    const task = await taskService.getTaskByKey(key);

    if (task) {
        return {
            error: errorsConsts['validation']['task']['alreadyTaken']
        }
    }

    try {
        return await taskService.createTask(key, description, name);
    } catch (e) {
        return {
            error: errorsConsts['internalServer']
        };
    }
};

const getTaskByKey = async (key) => {
    const task = await taskService.getTaskByKey(key);

    if (!task) {
        return {
            error: errorsConsts['validation']['task']['notExists']
        }
    }

    return await taskService.getTaskByKey(key);
};

const getAllTasks = async () => {
    return await taskService.getAllTasks();
};

module.exports = {
    createTask,
    getTaskByKey,
    getAllTasks
};
