const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoose_sequence = require("mongoose-sequence")(mongoose);

const ActivityTrackerItemSchema = new Schema({
    codePath: { type: String }
});

ActivityTrackerItemSchema.plugin(mongoose_sequence, { inc_field: "externalActivityTrackerItemId" });

ActivityTrackerItemSchema.methods.getPublicData = function () {
    return {
        codePath: this.codePath,
        id: this.externalActivityTrackerItemId
    };
};

module.exports = mongoose.model("ActivityTrackerItem", ActivityTrackerItemSchema);
