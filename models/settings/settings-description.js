// Copyright (c) 2020 Anastasiia Birillo

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SettingsDescriptionSchema = new Schema({
    surveyPane: {
        age: {type: String},
        gender: {type: String},
        experience: {type: String},
        country: {type: String},
        years: {type: String},
        months: {type: String},
        startSession: {type: String}
    },
    taskChoosePane: {
        chooseTask: {type: String},
        finishSession: {type: String},
        startSolving: {type: String}
    },
    taskPane: {
        inputData: {type: String},
        outputData: {type: String},
        submit: {type: String},
        // Todo: delete it
        backToTasks: {type: String}
    },
    finishPane: {
        praise: {type: String},
        backToSurvey: {type: String},
        finalMessage: {type: String},
        // Todo: delete it
        backToTasks: {type: String}
    },
    commonText: {
        backToTasks: {type: String}
    }
});

SettingsDescriptionSchema.methods.getPublicData = function () {
    let data = {
        surveyPane: this.surveyPane,
        taskChoosePane: this.taskChoosePane,
        taskPane: this.taskPane,
        finishPane: this.finishPane,
    };
    const backToTasksKeys = ['taskPane', 'finishPane'];
    backToTasksKeys.map(key => data[key]['backToTasks'] = this.commonText.backToTasks);
    return data;
};

module.exports = mongoose.model('SettingsDescription', SettingsDescriptionSchema);
