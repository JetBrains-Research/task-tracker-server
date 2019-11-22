const injector = require(require("path").dirname(require.main.filename) + "/injector");

const dataItemService = injector.inject_service("DataItemService");
const errorsConsts = injector.inject_const_file("Errors");

const createDataItem = async (projectId, codePath) => {
    try {
        return await dataItemService.createDataItem(projectId, codePath);
    } catch (e) {
        return {
            error: errorsConsts['internalServer']
        };
    }
};

const addPathToDataItem = async (projectId, codePath) => {
    const dataItem = await dataItemService.getDataItemByProjectId(projectId);

    if (!dataItem) {
        return {
            error: errorsConsts['validation']['dataItem']['notExists']
        }
    }

    return await dataItemService.addPathToDataItem(dataItem, codePath);
};

module.exports = {
    createDataItem,
    addPathToDataItem
};
