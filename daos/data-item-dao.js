const mongoose = require("mongoose");
const DataItem = mongoose.model("DataItem");

const createDataItem = async (codePath) => {
    const dataItem = new DataItem({
        codePath: codePath
    });
    return await dataItem.save();
};

const getDataItemByExternalId = async (externalId) => {
    return await DataItem.find({
        external_data_item_id: externalId
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
