const injector = require(require("path").dirname(require.main.filename) + "/injector");

const dataItemService = injector.inject_service("DataItemService");
const errorsConsts = injector.inject_const_file("Errors");

const createDataItem = async (codePath) => {
    try {
        return await dataItemService.createDataItem(codePath);
    } catch (e) {
        return {
            error: errorsConsts['internalServer']
        };
    }
};

const getDataItemByExternalId = async (externalId) => {
    const dataItem = await dataItemService.getDataItemByExternalId(externalId);

    if (!dataItem) {
        return {
            error: errorsConsts['validation']['dataItem']['notExists']
        }
    }

    return dataItem;
};

const getAllDataItems = async () => {
    return await dataItemService.getAllDataItems();
};

module.exports = {
    createDataItem,
    getDataItemByExternalId,
    getAllDataItems
};
