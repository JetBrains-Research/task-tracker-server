// Copyright (c) 2020 Anastasiia Birillo

const feedbackDao = require('../daos/feedback-dao');

const createFeedback = async (feedback, externalUserId) => {
    return await feedbackDao.createFeedback(feedback, externalUserId);
};

const getFeedbackByExternalId = async (externalId) => {
    return await feedbackDao.getFeedbackByExternalId(externalId);
};

const getAllFeedback = async () => {
    return await feedbackDao.getAllFeedback();
};

module.exports = {
    createFeedback,
    getAllFeedback,
    getFeedbackByExternalId
};
