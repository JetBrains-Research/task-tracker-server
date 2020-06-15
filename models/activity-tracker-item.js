const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongooseSequence = require('mongoose-sequence')(mongoose);

const ActivityTrackerItemSchema = new Schema({
    codePath: {type: String}
});

ActivityTrackerItemSchema.plugin(mongooseSequence, {inc_field: 'externalAtiId'});

ActivityTrackerItemSchema.methods.getPublicData = function () {
    return {
        codePath: this.codePath,
        id: this.externalAtiId
    };
};

module.exports = mongoose.model('ActivityTrackerItem', ActivityTrackerItemSchema);
