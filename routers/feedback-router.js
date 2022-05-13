// Copyright (c) 2020 Anastasiia Birillo

const intelLogger = require('intel');

const consts = require('../consts/consts');
// const ERRORS = require('../consts/errors').ERRORS;
const BASE_URL = require('../consts/consts').BASE_URL;
// const feedbackService = require('../services/feedback-service');
const feedbackController = require('../controllers/feedback-controller');
// const userController = require("../controllers/user-controller");

const logger = intelLogger.getLogger(consts.LOGGER_NAME);

module.exports = (app, upload) => {

    app.route(`${BASE_URL.FEEDBACK}`).post(async (req, res, next) => {
        logger.info(`${new Date()}: Feedback with ${req.body} was received`)
        const response = await feedbackController.createFeedback(req.body.feedback, req.body.id);
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {

            res.json(response.getPublicData().id)
        }
    });

    app.route(`${BASE_URL.FEEDBACK}/all`).get(async (req, res, next) => {
        const response = await feedbackController.getAllFeedback();
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            res.json(response.map(x => x.getPublicData()))
        }
    });

    app.route(`${BASE_URL.FEEDBACK}/:id`).get(async (req, res, next) => {
        const response = await feedbackController.getFeedbackByExternalId(req.params.id);
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            res.json(response.getPublicData())
        }
    });
};
