// Copyright (c) 2020 Anastasiia Birillo

const intelLogger = require('intel');

const consts = require('../consts/consts');
const ERRORS = require('../consts/errors').ERRORS;
const BASE_URL = require('../consts/consts').BASE_URL;
const LOGGER_NAME = require('../consts/consts').LOGGER_NAME;
const studentController = require('../controllers/student-controller');

const logger = intelLogger.getLogger(LOGGER_NAME);

module.exports = (app, upload) => {

    app.route(`${BASE_URL.STUDENT}`).post(async (req, res, next) => {
        const response = await studentController.createStudent();
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            res.json(response.getPublicData().id)
        }
    });

    app.route(`${BASE_URL.STUDENT}/:id`).put( async (req, res, next) => {
        const response = await studentController.addData(req.params.id, req.body.diId, req.body.atiId);
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            res.json(response.getPublicData())
        }
    });

    app.route(`${BASE_URL.STUDENT}/all`).get(async (req, res, next) => {
        const response = await studentController.getAllStudents();
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            let students = [];
            for(const student of response){
                students.push(student.getPublicData());
            }
            res.json(students);
        }
    });

    app.route(`${BASE_URL.STUDENT}/:id`).get(async (req, res, next) => {
        const response = await studentController.getStudentExternalId(req.params.id);
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            res.json(response.getPublicData())
        }
    });
};
