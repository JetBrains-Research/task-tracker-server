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
    taskOrder: {type: Object}
});

UserSchema.plugin(mongooseSequence, {inc_field: 'externalStudentId'});

UserSchema.post('save', function(doc, next){

    const taskOrder = {
        0: [4,0,3,7],
        1: [0,4,7,3],
        2: [1,5,2,6],
        3: [5,1,6,2],
    }


    if (this.group)
        {console.log('user already have a group')}

    else
    {
        this.group = this.externalStudentId % 4
        this.taskOrder = taskOrder[this.group]
        doc.save();
    }
    next();
});


UserSchema.methods.getPublicData = function () {
    let res = {
        id: this.externalStudentId,
        group: this.group,
        taskOrder: this.taskOrder,
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
