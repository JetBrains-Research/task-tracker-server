const mongoose = require("mongoose");
const DataItem = mongoose.model("DataItem");

const createDataItem = async (codePath, activityTrackerKey) => {
    const dataItem = new DataItem({
        codePath: codePath,
        activityTrackerKey: activityTrackerKey
    });
    return await dataItem.save();
};

const getDataItemByExternalId = async (externalId) => {
    return await DataItem.findOne({
        externalDataItemId: externalId
    })
};

const getAllDataItems = async () => {
    return await DataItem.find();
};

module.exports = {
    createDataItem,
    getDataItemByExternalId,
    getAllDataItems
};
