const injector = require(require("path").dirname(require.main.filename) + "/injector");

const studentDAO = injector.inject_dao("StudentDAO");

const createStudent = async (username, age, experience) => {
    return await studentDAO.createStudent(username, age, experience);
};

const getStudentByUsername = async (username) => {
    return await studentDAO.getStudentByUsername(username);
};

const getStudentByExternalId = async (externalId) => {
    return await studentDAO.getStudentByExternalId(externalId);
};

module.exports = {
    createStudent,
    getStudentByUsername,
    getStudentByExternalId
};
