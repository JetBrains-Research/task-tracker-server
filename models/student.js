// Copyright (c) 2020 Anastasiia Birillo

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongooseSequence = require('mongoose-sequence')(mongoose);

const StudentSchema = new Schema({
    data: [
        {
            activityTrackerKey: {type: String},
            dataItemKey: {type: String},
        }
    ]
});

StudentSchema.plugin(mongooseSequence, {inc_field: 'externalStudentId'});

StudentSchema.methods.getPublicData = function () {
    let res = {
        id: this.externalStudentId,
        data: []
    };
    for(const item of this.data) {
        res.data.push({
            atiId: item.activityTrackerKey,
            diId: item.dataItemKey
        })
    }
    return res;
};

module.exports = mongoose.model('Student', StudentSchema);
