const injector = require(require("path").dirname(require.main.filename) + "/injector");

const activityTrackerItemDAO = injector.inject_dao("ActivityTrackerItemDAO");

const createActivityTrackerItem = async () => {
    return await activityTrackerItemDAO.createActivityTrackerItem();
};

const getActivityTrackerItemByExternalId = async (externalId) => {
    return await activityTrackerItemDAO.getActivityTrackerItemByExternalId(externalId);
};

const addCodePath = async (codePath, activityTrackerItem) => {
    return await activityTrackerItemDAO.addCodePath(codePath, activityTrackerItem);
};

const getAllActivityTrackerItems = async () => {
    return await activityTrackerItemDAO.getAllActivityTrackerItems();
};

module.exports = {
    createActivityTrackerItem,
    getActivityTrackerItemByExternalId,
    getAllActivityTrackerItems,
    addCodePath
};
