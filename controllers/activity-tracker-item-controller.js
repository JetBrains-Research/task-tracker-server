// Copyright (c) 2020 Anastasiia Birillo

const intelLogger = require('intel');

const ERRORS = require('../consts/errors').ERRORS;
const LOGGER_NAME = require('../consts/consts').LOGGER_NAME;
const atiService = require('../services/activity-tracker-item-service');

const logger = intelLogger.getLogger(LOGGER_NAME);

const createAti = async () => {
    try {
        const ati = await atiService.createAti();
        logger.info(`${new Date()}: Activity tracker item was created successfully`);
        return ati;
    } catch (e) {
        logger.error(`${new Date()}: Activity tracker item was not created`, e);
        return {
            error: ERRORS.INTERNAL_SERVER
        };
    }
};

const getAtiByExternalId = async (externalId) => {
    const ati = await atiService.getAtiByExternalId(externalId);
    if (!ati) {
        const message = `Activity tracker item with id ${externalId} is not exists`;
        logger.error(`${new Date()}: ${message}`, new Error(message));
        return {
            error: ERRORS.VALIDATION.ACTIVITY_TRACKER_ITEM.NOT_EXISTS
        }
    }

    logger.info(`${new Date()}: Activity tracker item with id ${externalId} was received successfully`);
    return ati;
};

const getAllAti = async () => {
    const atiList = await atiService.getAllAti();
    logger.info(`${new Date()}: ${atiList.length} activity tracker items was received successfully`);
    return atiList;
};

const replaceCodePath = async (codePath, externalId) => {
    let ati = await getAtiByExternalId(externalId);
    if (ati.error) {
        return ati;
    }

    try {
        ati = await atiService.replaceCodePath(codePath, ati);
        logger.info(`${new Date()}: Activity tracker item was updated successfully`);
        return ati;
    } catch (e) {
        logger.error(`${new Date()}: Activity tracker item was not updated`, e);
        return {
            error: ERRORS.INTERNAL_SERVER
        };
    }

};

module.exports = {
    createAti,
    getAllAti,
    replaceCodePath,
    getAtiByExternalId,
};
