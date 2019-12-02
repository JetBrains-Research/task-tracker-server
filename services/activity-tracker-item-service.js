const injector = require(require("path").dirname(require.main.filename) + "/injector");

const activityTrackerItemDAO = injector.inject_dao("ActivityTrackerItemDAO");
const fileService = injector.inject_service('FileService');

const createActivityTrackerItem = async () => {
    return await activityTrackerItemDAO.createActivityTrackerItem();
};

const getActivityTrackerItemByExternalId = async (externalId) => {
    return await activityTrackerItemDAO.getActivityTrackerItemByExternalId(externalId);
};

const addCodePath = async (codePath, activityTrackerItem) => {
    return await activityTrackerItemDAO.addCodePath(codePath, activityTrackerItem);
};

const replaceCodePath = async (codePath, activityTrackerItem) => {
    const oldPath = activityTrackerItem.codePath;
    activityTrackerItem = await activityTrackerItemDAO.addCodePath(codePath, activityTrackerItem);
    if (activityTrackerItem && oldPath) {
        await fileService.deleteFile(oldPath.replace(/(.*)uploads/,
            require("path").dirname(require.main.filename) + '/uploads'));
    }
    return activityTrackerItem;
};

const getAllActivityTrackerItems = async () => {
    return await activityTrackerItemDAO.getAllActivityTrackerItems();
};

module.exports = {
    createActivityTrackerItem,
    getActivityTrackerItemByExternalId,
    getAllActivityTrackerItems,
    replaceCodePath
};
