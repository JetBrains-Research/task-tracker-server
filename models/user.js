// Copyright (c) 2020 Anastasiia Birillo

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongooseSequence = require('mongoose-sequence')(mongoose);

const taskOrder = {
    0: [0, 2],
    1: [1, 2],
    2: [0, 3],
    3: [1, 3],
}


const UserSchema = new Schema({
    data: [
        {
            activityTrackerKey: {type: String},
            dataItemKey: {type: String},
        }
    ],
    user_group: {type: Number, default: 5},
    taskOrder: {type: Object}
});

UserSchema.plugin(mongooseSequence, {inc_field: 'externalStudentId'});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

UserSchema.post('save', function(doc, next){

    // this.group = 4
    // doc.save()
    //
    if (this.user_group === 5)
    {
        this.user_group = this.externalStudentId % 4
        this.taskOrder = taskOrder[this.user_group]
        // this.taskOrder = [getRandomInt(2), 2 + getRandomInt(2)]
        doc.save();
    }
    else{
        console.log('user already have a group')
    }
    next();
});


UserSchema.methods.getPublicData = function () {
    let res = {
        id: this.externalStudentId,
        user_group: this.user_group,
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
