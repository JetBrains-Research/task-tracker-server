const injector = require(require("path").dirname(require.main.filename) + "/injector");

const taskSolutionItemDAO = injector.inject_dao("TaskSolutionItemDAO");

const createTSI = async (student, task, codePath) => {
    return await taskSolutionItemDAO.createTSI(student, task, codePath);
};

const getTSIByTaskId = async (task) => {
    return await taskSolutionItemDAO.getTSIByTaskId(task);
};

const getTSIByStudentId = async (student) => {
    return await taskSolutionItemDAO.getTSIByStudentId(student);
};

const getTSIByStudentIdAndTaskId = async (task, student) => {
    return await taskSolutionItemDAO.getTSIByStudentIdAndTaskId(task, student);
};

const getAllTSI = async () => {
    return await taskSolutionItemDAO.getAllTSI();
};

module.exports = {
    createTSI,
    getTSIByTaskId,
    getTSIByStudentId,
    getTSIByStudentIdAndTaskId,
    getAllTSI
};
