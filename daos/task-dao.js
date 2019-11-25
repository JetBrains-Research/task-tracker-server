const mongoose = require("mongoose");
const Task = mongoose.model("Task");

const createTask = async (key, description, name) => {
    const task = new Task({
        key: key
    });
    if (description) {
        task.description = description;
    }
    if (name) {
        task.name = name;
    }
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

const deleteTask = async (task) => {
    return await task.remove();
};

module.exports = {
    createTask,
    getTaskByKey,
    getAllTasks,
    getTaskByExternalId,
    deleteTask
};
