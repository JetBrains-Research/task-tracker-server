// Copyright (c) 2020 Anastasiia Birillo

const intelLogger = require('intel');

const ERRORS = require('../consts/errors').ERRORS;
const diController = require('./data-item-controller');
const LOGGER_NAME = require('../consts/consts').LOGGER_NAME;
const studentService = require('../services/student-service');
const atiController = require('./activity-tracker-item-controller');

const logger = intelLogger.getLogger(LOGGER_NAME);

const createStudent = async () => {
    try {
        const student = await studentService.createStudent();
        logger.info(`${new Date()}: Student was created successfully`);
        return student;
    } catch (e) {
        logger.error(`${new Date()}: Student was not created`, e);
        return {
            error: ERRORS.INTERNAL_SERVER
        };
    }
};

const getStudentExternalId = async (externalId) => {
    const student = await studentService.getStudentByExternalId(externalId);
    if (!student) {
        const message = `Student with id ${externalId} is not exists`;
        logger.error(`${new Date()}: ${message}`, new Error(message));
        return {
            error: ERRORS.VALIDATION.STUDENT.NOT_EXISTS
        }
    }
    logger.info(`${new Date()}: Student with id ${externalId} was received successfully`);
    return student;
};

const getAllStudents = async () => {
    const students = await studentService.getAllStudents();
    logger.info(`${new Date()}: ${students.length} students were received successfully`);
    return students;
};

const addData = async (studentId, diId, atiId) => {
    let student = await getStudentExternalId(studentId);
    if (student.error) {
        return student
    }

    const di = await diController.getDiByExternalId(diId);
    if (di.error) {
        return di
    }

    if (atiId !== '-1') {
        const ati = await atiController.getAtiByExternalId(atiId);
        if (ati.error) {
            return ati
        }
    }

    student = await studentService.addData(student, diId, atiId);
    logger.info(`${new Date()}: student ${studentId} was updates successfully. Added data: di ${diId}, ati ${atiId}`);
    return student
};

module.exports = {
    addData,
    createStudent,
    getAllStudents,
    getStudentExternalId
};
