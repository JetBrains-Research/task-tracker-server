// Copyright (c) 2020 Anastasiia Birillo

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongooseSequence = require('mongoose-sequence')(mongoose);

const UserSchema = new Schema({
    data: [
        {
            activityTrackerKey: {type: String},
            dataItemKey: {type: String},
        }
    ],
    group: {type: Number},
});

UserSchema.plugin(mongooseSequence, {inc_field: 'externalStudentId'});

UserSchema.post('save', function(doc, next){
    this.group = this.externalStudentId % 2
    next();
});



UserSchema.methods.getPublicData = function () {
    let res = {
        id: this.externalStudentId,
        group: this.group,
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

module.exports = mongoose.model('User', UserSchema);
