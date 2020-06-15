const dataItemDao = require('../daos/data-item-dao');

const createDataItem = async (codePath, activityTrackerKey) => {
    return await dataItemDao.createDataItem( codePath, activityTrackerKey);
};

const getDataItemByExternalId = async (externalId) => {
    return await dataItemDao.getDataItemByExternalId(externalId);
};

const getAllDataItems = async () => {
    return await dataItemDao.getAllDataItems();
};

module.exports = {
    createDataItem,
    getAllDataItems,
    getDataItemByExternalId
};
