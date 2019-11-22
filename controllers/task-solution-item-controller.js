const injector = require(require("path").dirname(require.main.filename) + "/injector");

const taskSolutionItemService = injector.inject_service("TaskSolutionItemService");
const studentService = injector.inject_service("StudentService");
const taskService = injector.inject_service("TaskService");
const errorsConsts = injector.inject_const_file("Errors");

const createTSI = async (username, taskKey, codePath) => {
    const task = await taskService.getTaskByKey(taskKey);

    if (!task) {
        return {
            error: errorsConsts['validation']['task']['notExists']
        }
    }

    const student = await studentService.getStudentByUsername(username);

    if (!student) {
        return {
            error: errorsConsts['validation']['student']['notExists']
        }
    }

    try {
        return await taskSolutionItemService.createTSI(student, task, codePath);
    } catch (e) {
        return {
            error: errorsConsts['internalServer']
        };
    }
};

const getTSIByTaskId = async (taskId) => {
    const task = await taskService.getTaskByExternalId(taskId);

    if (!task) {
        return {
            error: errorsConsts['validation']['task']['notExists']
        }
    }

    return await taskSolutionItemService.getTSIByTaskId(task);
};

const getTSIByStudentId = async (studentId) => {
    const student = await studentService.getStudentByExternalId(studentId);

    if (!student) {
        return {
            error: errorsConsts['validation']['student']['notExists']
        }
    }

    return await taskSolutionItemService.getTSIByStudentId(student);
};

const getTSIByStudentIdAndTaskId = async (taskId, studentId) => {
    const task = await taskService.getTaskByExternalId(taskId);

    if (!task) {
        return {
            error: errorsConsts['validation']['task']['notExists']
        }
    }

    const student = await studentService.getStudentByExternalId(studentId);

    if (!student) {
        return {
            error: errorsConsts['validation']['student']['notExists']
        }
    }

    return await taskSolutionItemService.getTSIByStudentIdAndTaskId(task, student);
};

const getAllTSI = async () => {
    return await taskSolutionItemService.getAllTSI();
};

module.exports = {
    createTSI,
    getTSIByTaskId,
    getTSIByStudentId,
    getTSIByStudentIdAndTaskId,
    getAllTSI
};
