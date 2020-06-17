// Copyright (c) 2020 Anastasiia Birillo

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SettingsDescriptionSchema = new Schema({
    profile: {
        age: {type: String},
        experience: {type: String},
        country: {type: String}
    },
    actions: {
        returnToProfile: {type: String},
        returnToTasks: {type: String},
        startNewTask: {type: String},
        finishWork: {type: String},
        chooseTask: {type: String},
        sendSolution: {type: String},
    },
    task: {
        name: {type: String},
        input: {type: String},
        output: {type: String},
    },
    finalScreen: {
        header: {type: String},
        notification: {type: String},
    }
});

SettingsDescriptionSchema.methods.getPublicData = function () {
    return {
        profile: this.profile,
        actions: this.actions,
        task: this.task,
        finalScreen: this.finalScreen,
    };
};

module.exports = mongoose.model('SettingsDescription', SettingsDescriptionSchema);
