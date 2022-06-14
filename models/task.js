// Copyright (c) 2020 Anastasiia Birillo

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongooseSequence = require('mongoose-sequence')(mongoose);

const taskSchema = new Schema({
    key: {type: Number, unique: true},
    isExperimental: {type: Boolean},
    shortDescription: {type: String},
    ideSettings: {type: Object, check_keys: false},
    description: {type: Object, check_keys: false},
});

taskSchema.plugin(mongooseSequence, {inc_field: 'externalTaskId'});

taskSchema.methods.getPublicData = function () {
    return {
        key: this.key,
        shortDescription: this.shortDescription,
        isExperimental: this.isExperimental,
        ideSettings: this.ideSettings,
        description: this.description,
    };
};

taskSchema.methods.getAsyncPublicData = async function () {
    let data = this.getPublicData();
    return data;
};

module.exports = mongoose.model('Task', taskSchema);