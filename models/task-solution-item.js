const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoose_sequence = require("mongoose-sequence")(mongoose);

const TaskSolutionItemSchema = new Schema({
    student: { type: Schema.ObjectId, ref: "Student" },
    task: { type: Schema.ObjectId, ref: "Task" },
    codePath: { type: String },
    createdAt: { type: Date, default: Date.now },
});

TaskSolutionItemSchema.plugin(mongoose_sequence, { inc_field: "externalTaskSolutionItemId" });

TaskSolutionItemSchema.methods.getPublicData = function () {
    return {
        codePath: this.codePath,
        createdAt: this.createdAt,
        id: this.externalTaskSolutionItemId
    };
};

TaskSolutionItemSchema.methods.getAsyncPublicData = async function () {
    const { student } = await this.populate("student").execPopulate();
    const { task } = await this.populate("task").execPopulate();
    const data = this.getPublicData();
    data.student = student.getPublicData();
    data.task = task.getPublicData();
    return data;
};


module.exports = mongoose.model("TaskSolutionItem", TaskSolutionItemSchema);
