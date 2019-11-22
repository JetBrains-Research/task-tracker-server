const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoose_sequence = require("mongoose-sequence")(mongoose);

const TaskSchema = new Schema({
    key: { type: String, unique: true },
    description: { type: String },
    name: { type: String }
});

TaskSchema.plugin(mongoose_sequence, { inc_field: "externalTaskId" });

TaskSchema.methods.getPublicData = function () {
    return {
        key: this.key,
        description: this.description,
        name: this.name,
        id: this.externalTaskId
    };
};

module.exports = mongoose.model("Task", TaskSchema);
