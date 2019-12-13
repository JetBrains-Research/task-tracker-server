const injector = require(require("path").dirname(require.main.filename) + "/injector");

const dataItemService = injector.inject_service("DataItemService");
const errorsConsts = injector.inject_const_file("Errors");

const intelLogger = require('intel');
const logger = intelLogger.getLogger('logger');

const createDataItem = async (codePath, activityTrackerKey) => {
    try {
        const dataItem = await dataItemService.createDataItem(codePath, activityTrackerKey);
        logger.info(`${new Date()}: Data item was created successfully`);
        return dataItem;
    } catch (e) {
        logger.error(`${new Date()}: Data item was not created`, e);
        return {
            error: errorsConsts['internalServer']
        };
    }
};

const getDataItemByExternalId = async (externalId) => {
    const dataItem = await dataItemService.getDataItemByExternalId(externalId);

    if (!dataItem) {
        logger.error(`${new Date()}: Data item with id ${externalId} is not exists`,
            new Error(`Data item with id ${externalId} is not exists`));
        return {
            error: errorsConsts['validation']['dataItem']['notExists']
        }
    }

    logger.info(`${new Date()}: Data item with id ${externalId} was received successfully`);
    return dataItem;
};

const getAllDataItems = async () => {
    const dataItems = await dataItemService.getAllDataItems();
    logger.info(`${new Date()}: ${dataItems.length} data items was received successfully`);
    return dataItems;
};

module.exports = {
    createDataItem,
    getDataItemByExternalId,
    getAllDataItems
};
