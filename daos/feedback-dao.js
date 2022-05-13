// Copyright (c) 2020 Anastasiia Birillo

const mongoose = require("mongoose");
const Feedback = mongoose.model("Feedback");

const createFeedback = async (feedback, externalUserId) => {
    const fb = new Feedback({
        feedback: feedback,
        externalUserId: externalUserId
    });
    return await fb.save();
};


const getFeedbackByExternalId = async (externalId) => {
    return await Feedback.findOne({
        externalFeedbackId: externalId
    })
};

const getAllFeedback = async () => {
    return await Feedback.find();
};

module.exports = {
    createFeedback,
    getAllFeedback,
    getFeedbackByExternalId,
};
