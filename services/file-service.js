const fs = require("fs");
const archiver = require('archiver');
const zipFolder = require('zip-folder');

const deleteFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.unlink(path, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });

    });
};

const deleteFolder = async (path) => {
    await fs.readdirSync(path).forEach(function (file, index) {
        const curPath = path + "/" + file;
        if (fs.lstatSync(curPath).isDirectory()) { // recurse
            deleteFolder(curPath);
        } else { // delete file
            fs.unlinkSync(curPath);
        }
    });
    await fs.rmdirSync(path);
};

const initDirectory = async (path) => {
    if (fs.existsSync(path)) {
        await deleteFolder(path);
    }
    fs.mkdirSync(path);
};

const createDir = (path) => {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
};

const copyFile = (sourcePath, destinationPath) => {
    return new Promise((resolve, reject) => {
        try {
            fs.copyFile(sourcePath, destinationPath, (err) => {
                if (err) {
                    resolve(false);
                } else {
                    resolve(true);
                }
            });
        } catch (e) {
            resolve(false);
        }
    });
};

const createArchive = async (path) => {
    await initDirectory('./download');
    return new Promise((resolve, reject) => {
        zipFolder(path,  './download/data.zip', function(err) {
            if (err) {
                resolve(null);
            } else {
                resolve('/download/data.zip');
            }
        });

    });
};

module.exports = {
    deleteFile,
    initDirectory,
    createDir,
    copyFile,
    createArchive,
    deleteFolder
};
