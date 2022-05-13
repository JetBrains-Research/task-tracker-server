// Copyright (c) 2020 Anastasiia Birillo

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongooseSequence = require('mongoose-sequence')(mongoose);

const FeedbackSchema = new Schema({
    externalUserId: {type: Number},
    feedback: {type: String},

});

FeedbackSchema.plugin(mongooseSequence, {inc_field: 'externalFeedbackId'});

FeedbackSchema.methods.getPublicData = function () {
    return {
        externalUserId: this.externalUserId,
        feedback: this.feedback,
        id: this.externalFeedbackId
    };
};

module.exports = mongoose.model('Feedback', FeedbackSchema);
