const intelLogger = require('intel');

const fileService = require('../services/file-service');
const LOGGER_NAME = require('../consts/consts').LOGGER_NAME;
const dataItemService = require('../services/data-item-service');
const activityTrackerItemService = require('../services/activity-tracker-item-service');

const logger = intelLogger.getLogger(LOGGER_NAME);
const APP_DIR = require('path').dirname(require.main.filename) + '/';

const dataDownload = async () => {
    const DIR = './data';
    await fileService.initDirectory(DIR);

    logger.info(`${new Date()}: ...starting get all data items`);
    const dataItems = await dataItemService.getAllDataItems();
    logger.info(`${new Date()}: ${dataItems.length} was received successfully`);
    let countCopy = 0;
    let countATR = 0;
    let countDI = 0;
    for(const di of dataItems) {
        if (di.codePath) {
            logger.info(`${new Date()}: ...starting handle data item with id ${di.externalDataItemId}`);
            countDI += 1;
            logger.debug(`${new Date()}: ...starting get activity tracker item`);
            const ati = await getATI(di);
            let atiPath = null;
            if (ati) {
                logger.debug(`${new Date()}: activity tracker item with id ${ati.externalActivityTrackerItemId} was received successfully`);
                if (ati.codePath)
                    atiPath = ati.codePath;
            } else {
                logger.debug(`${new Date()}: activity tracker item was not received`);
            }
            const path = await createResultDirectory(DIR, di.externalDataItemId, di.activityTrackerKey, atiPath);
            logger.debug(`${new Date()}: result directory was created successfully`);
            logger.debug(`${new Date()}: ...is copying data item file with path ${di.codePath}`);
            if (await copyFile(di.codePath, path)) {
                countCopy += 1;
            }
            if (atiPath !== null) {
                countATR += 1;
                logger.debug(`${new Date()}: ...is copying activity tracker item file with path ${atiPath}`);
                if (await copyFile(atiPath, path)) {
                    countCopy += 1;
                }
            }
        }
    }
    let isAll = false;
    if (countATR + countDI === countCopy) {
        isAll = true;
    }
    logger.info(`${new Date()}: ...is creating archive`);
    const resultPath = await fileService.createArchive(APP_DIR + DIR.substr(2));
    logger.info(`${new Date()}: ...is deleting tmp folder`);
    await fileService.deleteFolder(APP_DIR + DIR.substr(2));

    return {
        path: resultPath,
        isAll: isAll
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

const getATI = async (di) => {
    const activityTrackerId = di.activityTrackerKey;
    if (activityTrackerId && activityTrackerId !== -1) {
        return await activityTrackerItemService.getActivityTrackerItemByExternalId(activityTrackerId);
    }
    return null;
};

const createResultDirectory = async (dir, diId, atiId, atiPath) => {
    let currentPath = getCurrentPathForDiAndAti(dir, diId, atiId, atiPath);
    fileService.createDir(currentPath);
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
