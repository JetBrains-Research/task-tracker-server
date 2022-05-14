// Copyright (c) 2020 Anastasiia Birillo

const mongoose = require('mongoose');

const Task = mongoose.model('Task');
const LANGUAGES = require('../../consts/consts').LANGUAGES;
const taskDescriptionDao = require('./task-description-dao');

const createTask = async (key, ideSettings, descriptions, examples) => {
    console.log(ideSettings)
    const task = new Task({
        key: key,
        ideSettings: ideSettings,
        examples: examples,
    });
    for (const description of descriptions) {
        task[description.language] = description.td._id;
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
    for (const language of LANGUAGES) {
        const description = await task.populate(language).execPopulate();
        await taskDescriptionDao.deleteTaskDescription(description[language]);
    }
    return await task.remove();
};

module.exports = {
    createTask,
    deleteTask,
    getAllTasks,
    getTaskByKey,
    getTaskByExternalId,
};
