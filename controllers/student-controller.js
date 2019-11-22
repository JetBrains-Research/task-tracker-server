const injector = require(require("path").dirname(require.main.filename) + "/injector");

const studentService = injector.inject_service("StudentService");
const errorsConsts = injector.inject_const_file("Errors");

const createStudent = async (username, age, experience) => {
    const student = await studentService.getStudentByUsername(username);

    if (student) {
        return {
            error: errorsConsts['validation']['student']['alreadyTaken']
        }
    }

    try {
        return await studentService.createStudent(username, age, experience);
    } catch (e) {
        return {
            error: errorsConsts['internalServer']
        };
    }
};

const getStudentByUsername = async (username) => {
    const student = await studentService.getStudentByUsername(username);

    if (!student) {
        return {
            error: errorsConsts['validation']['student']['notExists']
        }
    }

    return await studentService.getStudentByUsername(username);
};

module.exports = {
    createStudent,
    getStudentByUsername
};
