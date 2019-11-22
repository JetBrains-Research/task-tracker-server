const mongoose = require("mongoose");
const TaskSolutionItem = mongoose.model("TaskSolutionItem");

const createTSI = async (student, task, codePath) => {
    const taskSolutionItem = new TaskSolutionItem({
        student: student.id,
        task: task.id,
        codePath: codePath
    });
    return await taskSolutionItem.save();
};

const getTSIByTaskId = async (task) => {
    return await TaskSolutionItem.find({
        task: task.id
    })
};

const getTSIByStudentId = async (student) => {
    return await TaskSolutionItem.find({
        student: student.id
    })
};

const getTSIByStudentIdAndTaskId = async (task, student) => {
    return await TaskSolutionItem.find({
        student: student.id,
        task: task.id
    })
};

const getAllTSI = async () => {
    return await TaskSolutionItem.find({})
};

module.exports = {
    createTSI,
    getTSIByTaskId,
    getTSIByStudentId,
    getTSIByStudentIdAndTaskId,
    getAllTSI
};
