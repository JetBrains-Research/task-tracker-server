const mongoose = require("mongoose");
const DataItem = mongoose.model("DataItem");

const createDataItem = async (projectId, codePath) => {
    const dataItem = new DataItem({
        projectId: projectId,
        codePaths: [codePath]
    });
    return await dataItem.save();
};

const getDataItemByProjectId = async (projectId) => {
    return await DataItem.findOne({
        projectId: projectId
    })
};

const getDataItemByExternalId = async (externalId) => {
    return await DataItem.find({
        external_data_item_id: externalId
    })
};

const addPathToDataItem = async (dataItem, codePath) => {
    dataItem.codePaths.push(codePath);
};

module.exports = {
    createDataItem,
    getDataItemByProjectId,
    getDataItemByExternalId,
    addPathToDataItem
};
