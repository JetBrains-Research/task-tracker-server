// Copyright (c) 2020 Anastasiia Birillo

const fileService = require('../services/file-service');
const atiDao = require('../daos/activity-tracker-item-dao');

const createAti = async () => {
    return await atiDao.createAti();
};

const getAtiByExternalId = async (externalId) => {
    return await atiDao.getAtiByExternalId(externalId);
};

const getAllAti = async () => {
    return await atiDao.getAllAti();
};

module.exports = {
    createAti,
    getAtiByExternalId,
    getAllAti
};
