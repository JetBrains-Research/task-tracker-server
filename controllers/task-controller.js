// Copyright (c) 2020 Anastasiia Birillo

const intelLogger = require('intel');

const ERRORS = require('../consts/errors').ERRORS;
const taskService = require('../services/task-service');
const LOGGER_NAME = require('../consts/consts').LOGGER_NAME;

const logger = intelLogger.getLogger(LOGGER_NAME);


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

const createTask = async (key, descriptions, examples) => {
    const task = await taskService.getTaskByKey(key);

    if (task) {
        logger.error(`${new Date()}: Task ${key} was not created`, new Error(`Task ${key} is already taken`));
        return {
            error: ERRORS.VALIDATION.TASK.ALREADY_TAKEN
        }
    }

    return await taskService.createTask(key, descriptions, examples);
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
    getAllTasks,
    getTaskByKey,
    deleteTaskByKey,
};
