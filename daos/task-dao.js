const mongoose = require("mongoose");
const Task = mongoose.model("Task");

const createTask = async (key, description, name, input, output, example_1, example_2, example_3) => {
    const task = new Task({
        key: key
    });
    if (description) {
        task.description = description;
    }
    if (name) {
        task.name = name;
    }
    if (input) {
        task.input = input;
    }
    if (output) {
        task.output = output;
    }
    if (example_1) {
        task.example_1 = example_1;
    }
    if (example_2) {
        task.example_2 = example_2;
    }
    if (example_3) {
        task.example_3 = example_3;
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
