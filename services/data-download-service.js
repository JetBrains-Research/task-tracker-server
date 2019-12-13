const injector = require(require("path").dirname(require.main.filename) + "/injector");

const activityTrackerItemService = injector.inject_service("ActivityTrackerItemService");
const dataItemService = injector.inject_service("DataItemService");
const fileService = injector.inject_service("FileService");

const APP_DIR = require("path").dirname(require.main.filename) + "/";

const dataDownload = async () => {
    const DIR = './data';
    await fileService.initDirectory(DIR);

    const dataItems = await dataItemService.getAllDataItems();
    let countCopy = 0;
    let countATR = 0;
    let countDI = 0;
    for(const di of dataItems) {
        if (di.codePath) {
            countDI += 1;
            const ati = await getATI(di);
            let atiPath = null;
            if (ati)
                atiPath = ati.codePath;
            const path = await createResultDirectory(DIR, di.externalDataItemId, di.activityTrackerKey, atiPath);
            if (await copyFile(di.codePath, path)) {
                countCopy += 1;
            }
            if (atiPath !== null) {
                countATR += 1;
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
    const resultPath = await fileService.createArchive(APP_DIR + DIR.substr(2));
    await fileService.deleteFolder(APP_DIR + DIR.substr(2));

    return {
        path: resultPath,
        isAll: isAll
    }
};

const copyFile = (oldPath, newPath) => {
    const sourcePath = getFileSystemPath(oldPath, "uploads");
    const destinationPath = sourcePath.replace("/uploads", newPath.substr(1));
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
        currentPath += "/ati_" + atiId;
    } else {
        currentPath += "/di_" + diId;
    }
    return currentPath
};

module.exports = {
    dataDownload
};
