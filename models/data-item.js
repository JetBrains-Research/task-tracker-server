const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoose_sequence = require("mongoose-sequence")(mongoose);

const DataItemSchema = new Schema({
    userId: { type: Number },
    codePaths: [{ type: String }]
});

DataItemSchema.plugin(mongoose_sequence, { inc_field: "externalDataItemId" });

DataItemSchema.methods.getPublicData = function () {
    return {
        userId: this.userId,
        codePaths: this.codePaths,
        id: this.externalDataItemId
    };
};

module.exports = mongoose.model("DataItem", DataItemSchema);
