const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoose_sequence = require("mongoose-sequence")(mongoose);

const StudentSchema = new Schema({
    username: { type: String, unique: true },
    age: { type: Number },
    experience: { type: String, enum : ['LESS_YEAR','ONE_TWO_YEARS', 'TWO_FOUR_YEARS', 'MORE_FOUR_YEARS'],
        default: 'user' }
});

StudentSchema.plugin(mongoose_sequence, { inc_field: "externalStudentId" });

StudentSchema.methods.getPublicData = function () {
    return {
        username: this.username,
        age: this.age,
        experience: this.experience,
        id: this.externalStudentId
    };
};

module.exports = mongoose.model("Student", StudentSchema);
