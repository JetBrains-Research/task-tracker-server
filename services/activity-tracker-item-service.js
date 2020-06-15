const injector = require(require('path').dirname(require.main.filename) + '/injector');

const atiDao = injector.injectObject(injector.objectType.DAO, 'ActivityTrackerItemDAO');
const fileService = injector.injectObject(injector.objectType.SERVICE, 'FileService');

const createAti = async () => {
    return await atiDao.createAti();
};

const getAtiByExternalId = async (externalId) => {
    return await atiDao.getAtiByExternalId(externalId);
};

const replaceCodePath = async (codePath, ati) => {
    const oldPath = ati.codePath;
    ati = await atiDao.replaceCodePath(codePath, ati);
    if (ati && oldPath) {
        await fileService.deleteFile(oldPath.replace(/(.*)uploads/,
            require('path').dirname(require.main.filename) + '/uploads'));
    }
    return ati;
};

const getAllAti = async () => {
    return await atiDao.getAllAti();
};

module.exports = {
    createAti,
    getAtiByExternalId,
    getAllAti,
    replaceCodePath
};
