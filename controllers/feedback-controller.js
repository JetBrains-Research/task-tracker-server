// Copyright (c) 2020 Anastasiia Birillo

const intelLogger = require('intel');

const ERRORS = require('../consts/errors').ERRORS;
const feedbackService = require('../services/feedback-service');
const LOGGER_NAME = require('../consts/consts').LOGGER_NAME;

const logger = intelLogger.getLogger(LOGGER_NAME);

const createFeedback = async (feedback, externalUserId) => {
    try {
        const fb = await feedbackService.createFeedback(feedback, externalUserId);
        logger.info(`${new Date()}: Feedback with ${fb} was created successfully`);
        return fb;
    } catch (e) {
        logger.error(`${new Date()}: Data item was not created`, e);
        return {
            error: ERRORS.INTERNAL_SERVER
        };
    }
};

const getFeedbackByExternalId = async (externalId) => {
    const feedback = await feedbackService.getFeedbackByExternalId(externalId);
    if (!feedback) {
        const message = `Data item with id ${externalId} is not exists`;
        logger.error(`${new Date()}: ${message}`, new Error(message));
        return {
            error: ERRORS.VALIDATION.DATA_ITEM.NOT_EXISTS
        }
    }
    logger.info(`${new Date()}: Data item with id ${externalId} was received successfully`);
    return feedback;
};

const getAllFeedback = async () => {
    const feedback = await feedbackService.getAllFeedback();
    logger.info(`${new Date()}: ${feedback.length} data items were received successfully`);
    return feedback;
};

module.exports = {
    createFeedback,
    getAllFeedback,
    getFeedbackByExternalId,
};
