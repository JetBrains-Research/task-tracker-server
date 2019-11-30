const injector = require(require("path").dirname(require.main.filename) + "/injector");

const taskService = injector.inject_service("TaskService");
const errorsConsts = injector.inject_const_file("Errors");

const intelLogger = require('intel');
const logger = intelLogger.getLogger('logger');

const createTask = async (key, description, name) => {
    const task = await taskService.getTaskByKey(key);

    if (task) {
        logger.error(`${new Date()}: Task ${key} was not created`, new Error(`Task ${key} is already taken`));
        return {
            error: errorsConsts['validation']['task']['alreadyTaken']
        }
    }

    try {
        const task = await taskService.createTask(key, description, name);
        logger.info(`${new Date()}: Task ${key} was created successfully`);
        return task;
    } catch (e) {
        logger.error(`${new Date()}: Task ${key} was not created`, e);
        return {
            error: errorsConsts['internalServer']
        };
    }
};

const getTaskByKey = async (key) => {
    const task = await taskService.getTaskByKey(key);

    if (!task) {
        logger.error(`${new Date()}: Task ${key} is not exists`, new Error(`Task ${key} is not exists`));
        return {
            error: errorsConsts['validation']['task']['notExists']
        }
    }

    logger.info(`${new Date()}: Task ${key} was received successfully`);
    return await taskService.getTaskByKey(key);
};

const deleteTaskByKey = async (key) => {
    const task = await taskService.getTaskByKey(key);

    if (!task) {
        logger.error(`${new Date()}: Task ${key} is not exists`, new Error(`Task ${key} is not exists`));
        return {
            error: errorsConsts['validation']['task']['notExists']
        }
    }

    logger.info(`${new Date()}: Task ${key} was deleted successfully`);
    return await taskService.deleteTask(task);
};

const getAllTasks = async () => {
    const tasks = await taskService.getAllTasks();
    logger.info(`${new Date()}: ${tasks.length} tasks was received successfully`);
    return tasks;
};

module.exports = {
    createTask,
    getTaskByKey,
    getAllTasks,
    deleteTaskByKey
};
