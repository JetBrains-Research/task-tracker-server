// Copyright (c) 2020 Anastasiia Birillo

const intelLogger = require('intel');

const fileService = require('../services/file-service');
const diService = require('../services/data-item-service');
const LOGGER_NAME = require('../consts/consts').LOGGER_NAME;
const atiService = require('../services/activity-tracker-item-service');

const logger = intelLogger.getLogger(LOGGER_NAME);
const APP_DIR = require('path').dirname(require.main.filename) + '/';

const dataDownload = async () => {
    const rootDir = './data';
    fileService.initDirectory(rootDir);

    logger.info(`${new Date()}: ...starting get all data items`);
    const dataItems = await diService.getAllDi();
    logger.info(`${new Date()}: ${dataItems.length} was received successfully`);
    let countCopy = 0;
    let countAti = 0;
    let countDi = 0;
    for(const di of dataItems) {
        if (di.codePath) {
            logger.info(`${new Date()}: ...starting handle data item with id ${di.externalDiId}`);
            countDi += 1;
            logger.debug(`${new Date()}: ...starting get activity tracker item`);
            const atiPath = await getAtiPath(di);
            const resultPath = await createResultDirectory(rootDir, di.externalDiId, di.activityTrackerKey, atiPath);
            logger.debug(`${new Date()}: result directory was created successfully`);
            logger.debug(`${new Date()}: ...is copying data item file with path ${di.codePath}`);
            if (copyFile(di.codePath, resultPath)) {
                countCopy += 1;
            }
            if (atiPath !== null) {
                countAti += 1;
                logger.debug(`${new Date()}: ...is copying activity tracker item file with path ${atiPath}`);
                if (copyFile(atiPath, resultPath)) {
                    countCopy += 1;
                }
            }
        }
    }
    logger.info(`${new Date()}: ...is creating archive`);
    const resultPath = await fileService.createArchive(APP_DIR + rootDir.substr(2));
    logger.info(`${new Date()}: ...is deleting tmp folder`);
    await fileService.deleteDirectory(APP_DIR + rootDir.substr(2));

    return {
        path: resultPath,
        isAll: countAti + countDi === countCopy
    }
};

const copyFile = (oldPath, newPath) => {
    const sourcePath = getFileSystemPath(oldPath, 'uploads');
    const destinationPath = sourcePath.replace('/uploads', newPath.substr(1));
    return !!fileService.copyFile(sourcePath, destinationPath);
};

const getFileSystemPath = (path, word) => {
    const index = path.indexOf(word);
    if (index !== -1)
        return APP_DIR + path.substr(index);
    return path;
};

const getAtiPath = async (di) => {
    if (di.activityTrackerKey && di.activityTrackerKey !== -1) {
        const ati = await atiService.getAtiByExternalId(di.activityTrackerKey);
        if (ati) {
            logger.debug(`${new Date()}: activity tracker item with id ${ati.externalAtiId} was received successfully`);
            if (ati.codePath)
                return ati.codePath;
        } else {
            logger.debug(`${new Date()}: activity tracker item was not received`);
        }
        return null
    }
    return null;
};

const createResultDirectory = async (dir, diId, atiId, atiPath) => {
    let currentPath = getCurrentPathForDiAndAti(dir, diId, atiId, atiPath);
    fileService.createDirectory(currentPath);
    return currentPath;
};

const getCurrentPathForDiAndAti = (dir, diId, atiId, atiPath) => {
    let currentPath = dir;
    if (atiPath !== null) {
        currentPath += '/ati_' + atiId;
    } else {
        currentPath += '/di_' + diId;
    }
    return currentPath
};

module.exports = {
    dataDownload
};
