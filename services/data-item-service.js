const injector = require(require('path').dirname(require.main.filename) + '/injector');

const dataItemDAO = injector.injectObject(injector.objectType.DAO,'DataItemDAO');

const createDataItem = async (codePath, activityTrackerKey) => {
    return await dataItemDAO.createDataItem( codePath, activityTrackerKey);
};

const getDataItemByExternalId = async (externalId) => {
    return await dataItemDAO.getDataItemByExternalId(externalId);
};

const getAllDataItems = async () => {
    return await dataItemDAO.getAllDataItems();
};

module.exports = {
    createDataItem,
    getAllDataItems,
    getDataItemByExternalId
};
