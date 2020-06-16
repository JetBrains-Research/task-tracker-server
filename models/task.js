// Copyright (c) 2020 Anastasiia Birillo

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LANGUAGES = require('../consts/consts').LANGUAGES;
const mongooseSequence = require('mongoose-sequence')(mongoose);

const TaskSchema = new Schema({
    key: {type: String, unique: true},
    ru: { type: Schema.ObjectId, ref: 'TaskDescription' },
    en: { type: Schema.ObjectId, ref: 'TaskDescription' },
    examples: [{
            input: {type: String},
            output: {type: String}
        }]
});

TaskSchema.plugin(mongooseSequence, {inc_field: 'externalTaskId'});

TaskSchema.methods.getPublicData = function () {
    return {
        id: this.externalTaskId,
        key: this.key,
        examples: this.examples
    };
};

TaskSchema.methods.getAsyncPublicData = async function () {
    let data = this.getPublicData();
    for(const language of LANGUAGES){
        const currentLang = await this.populate(language).execPopulate();
        data[language] = currentLang[language].getPublicData();
    }
    return data;
};

module.exports = mongoose.model('Task', TaskSchema);
