// Copyright (c) 2020 Anastasiia Birillo

const intelLogger = require('intel');

const studentDao = require('../daos/student-dao');

const ERRORS = require('../consts/errors').ERRORS;
const LOGGER_NAME = require('../consts/consts').LOGGER_NAME;
const logger = intelLogger.getLogger(LOGGER_NAME);

const createStudent = async () => {
    return await studentDao.createStudent();
};

const getStudentByExternalId = async (externalId) => {
    return await studentDao.getStudentByExternalId(externalId);
};

const addData = async (student, di, ati) => {
    const diId = String(di.getPublicData().id);
    const atiId = String(ati.getPublicData().id);
    const isExists = student.data.findIndex(item => (item.activityTrackerKey === atiId && item.dataItemKey ===diId)) !== -1;
    if (isExists) {
        const message = `Student with id ${student.externalStudentId} has data pair: di = ${diId} and ati = ${atiId}`;
        logger.error(`${new Date()}: ${message}`, new Error(message));
        return {
            error: ERRORS.VALIDATION.STUDENT.DATA.ALREADY_TAKEN
        }
    }
    return await studentDao.addData(student, di, ati)
};

const getAllStudents = async () => {
    return await studentDao.getAllStudents();
};

module.exports = {
    addData,
    createStudent,
    getAllStudents,
    getStudentByExternalId
};
