const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongooseSequence = require('mongoose-sequence')(mongoose);

const TaskSchema = new Schema({
    key: {type: String, unique: true},
    description: {type: String},
    input: {type: String},
    output: {type: String},
    example_1: {
        input: {type: String},
        output: {type: String}
    },
    example_2: {
        input: {type: String},
        output: {type: String}
    },
    example_3: {
        input: {type: String},
        output: {type: String}
    },
    name: {type: String}
});

TaskSchema.plugin(mongooseSequence, {inc_field: 'externalTaskId'});

TaskSchema.methods.getPublicData = function () {
    return {
        key: this.key,
        description: this.description,
        name: this.name,
        input: this.input,
        output: this.output,
        example_1: this.example_1,
        example_2: this.example_2,
        example_3: this.example_3,
        id: this.externalTaskId
    };
};

module.exports = mongoose.model('Task', TaskSchema);
