const intelLogger = require('intel');

const ERRORS = require('../consts/errors').ERRORS;
const taskService = require('../services/task-service');
const LOGGER_NAME = require('../consts/consts').LOGGER_NAME;

const logger = intelLogger.getLogger(LOGGER_NAME);

const createTask = async (key, description, name, input, output, example_1, example_2, example_3) => {
    const task = await taskService.getTaskByKey(key);

    if (task) {
        logger.error(`${new Date()}: Task ${key} was not created`, new Error(`Task ${key} is already taken`));
        return {
            error: ERRORS.VALIDATION.TASK.ALREADY_TAKEN
        }
    }

    try {
        const task = await taskService.createTask(key, description, name, input, output, example_1, example_2, example_3);
        logger.info(`${new Date()}: Task ${key} was created successfully`);
        return task;
    } catch (e) {
        logger.error(`${new Date()}: Task ${key} was not created`, e);
        return {
            error: ERRORS.INTERNAL_SERVER
        };
    }
};

const getTaskByKey = async (key) => {
    const task = await taskService.getTaskByKey(key);

    if (!task) {
        logger.error(`${new Date()}: Task ${key} is not exists`, new Error(`Task ${key} is not exists`));
        return {
            error: ERRORS.VALIDATION.TASK.NOT_EXISTS
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
            error: ERRORS.VALIDATION.TASK.NOT_EXISTS
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
