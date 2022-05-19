// Copyright (c) 2020 Anastasiia Birillo

const intelLogger = require('intel');
const ERRORS = require('../consts/errors').ERRORS;
const taskDao = require('../daos/task-dao');
const LOGGER_NAME = require('../consts/consts').LOGGER_NAME;
// const taskDescriptionService = require('./task-description-service');

const logger = intelLogger.getLogger(LOGGER_NAME);

const createTask = async (key, isExperimental, ideSettings, description) => {
    try {
        const task = await taskDao.createTask(key, isExperimental, ideSettings, description);
        logger.info(`${new Date()}: Task ${key} was created successfully`);
        return task;
    } catch (e) {
        logger.error(`${new Date()}: Task ${key} was not created`, e);
        // for (const td of preparedDescriptions) {
        //     await taskDescriptionService.deleteTaskDescription(td);
        // }
        return {
            error: ERRORS.INTERNAL_SERVER
        };
    }
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
    deleteTask,
    getAllTasks,
    getTaskByKey,
    getTaskByExternalId,
};
