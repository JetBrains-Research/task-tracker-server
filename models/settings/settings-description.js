// Copyright (c) 2020 Anastasiia Birillo

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SettingsDescriptionSchema = new Schema({
    surveyPane: {
        questions: [String],
    },
});

SettingsDescriptionSchema.methods.getPublicData = function () {
    return {
        surveyPane: this.surveyPane,
    };
};

module.exports = mongoose.model('SettingsDescription', SettingsDescriptionSchema);
