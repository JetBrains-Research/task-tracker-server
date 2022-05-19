const mongoose = require('mongoose');

const Task = mongoose.model('Task');


const createTask = async (key, isExperimental, ideSettings, description) => {

    const task = new Task({
        key: key,
        isExperimental: isExperimental,
        ideSettings: ideSettings,
        description: description,
    });
    return await task.save();
};

const getTaskByKey = async (key) => {
    return await Task.findOne({
        key: key
    })
};

const getTaskByExternalId = async (externalId) => {
    return await Task.findOne({
        externalTaskId: externalId
    })
};

const getAllTasks = async () => {
    return await Task.find();
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskByKey,
    getTaskByExternalId,
};