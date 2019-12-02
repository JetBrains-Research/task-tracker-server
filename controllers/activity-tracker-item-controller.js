const injector = require(require("path").dirname(require.main.filename) + "/injector");

const activityTrackerItemService = injector.inject_service("ActivityTrackerItemService");
const errorsConsts = injector.inject_const_file("Errors");

const intelLogger = require('intel');
const logger = intelLogger.getLogger('logger');

const createActivityTrackerItem = async () => {
    try {
        const activityTrackerItem = await activityTrackerItemService.createActivityTrackerItem();
        logger.info(`${new Date()}: Activity tracker item was created successfully`);
        return activityTrackerItem;
    } catch (e) {
        logger.error(`${new Date()}: Activity tracker item was not created`, e);
        return {
            error: errorsConsts['internalServer']
        };
    }
};

const getActivityTrackerItemByExternalId = async (externalId) => {
    const activityTrackerItem = await activityTrackerItemService.getActivityTrackerItemByExternalId(externalId);

    if (!activityTrackerItem) {
        logger.error(`${new Date()}: Activity tracker item with id ${externalId} is not exists`,
            new Error(`Activity tracker item with id ${externalId} is not exists`));
        return {
            error: errorsConsts['validation']['activityTrackerItemItem']['notExists']
        }
    }

    logger.info(`${new Date()}: Activity tracker item with id ${externalId} was received successfully`);
    return activityTrackerItem;
};

const getAllActivityTrackerItems = async () => {
    const activityTrackerItems = await activityTrackerItemService.getAllActivityTrackerItems();
    logger.info(`${new Date()}: ${activityTrackerItems.length} activity tracker items was received successfully`);
    return activityTrackerItems;
};

const replaceCodePath = async (codePath, externalId) => {
    let activityTrackerItem = await getActivityTrackerItemByExternalId(externalId);
    if (activityTrackerItem.error) {
        return activityTrackerItem;
    }

    try {
        activityTrackerItem = await activityTrackerItemService.replaceCodePath(codePath, activityTrackerItem);
        logger.info(`${new Date()}: Activity tracker item was updated successfully`);
        return activityTrackerItem;
    }catch (e) {
        logger.error(`${new Date()}: Activity tracker item was not updated`, e);
        return {
            error: errorsConsts['internalServer']
        };
    }

};

module.exports = {
    createActivityTrackerItem,
    getActivityTrackerItemByExternalId,
    getAllActivityTrackerItems,
    replaceCodePath
};
