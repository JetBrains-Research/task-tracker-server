const injector = require(require("path").dirname(require.main.filename) + "/injector");

const dataItemDAO = injector.inject_dao("DataItemDAO");

const createDataItem = async (projectId, codePath) => {
    return await dataItemDAO.createDataItem(projectId, codePath);
};

const getDataItemByProjectId = async (projectId) => {
    return await dataItemDAO.getDataItemByProjectId(projectId);
};

const getDataItemByExternalId = async (externalId) => {
    return await dataItemDAO.getDataItemByExternalId(externalId);
};

const addPathToDataItem = async (dataItem, codePath) => {
    return await dataItemDAO.addPathToDataItem(dataItem, codePath);
};

module.exports = {
    createDataItem,
    getDataItemByProjectId,
    getDataItemByExternalId,
    addPathToDataItem
};
