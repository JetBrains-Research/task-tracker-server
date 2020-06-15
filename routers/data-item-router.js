const intelLogger = require('intel');

const errors = require('../consts/errors');
const fileService = require('../services/file-service');
const LOGGER_NAME = require('../consts/consts').LOGGER_NAME;
const dataItemController = require('../controllers/data-item-controller');

const logger = intelLogger.getLogger(LOGGER_NAME);

module.exports = (app, upload) => {

    app.route('/api/data-item').post(upload.single('code'), async (req, res, next) => {
            if (!req.file) {
                const error = errors['validation']['file']['notReceived'];
                logger.error(`${new Date()}: file was not received`, new Error('File was not received'));
                res.status(error.code);
                res.json(error.content);
                res.end();
            } else {
                const absolute_path = req.protocol + '://' + req.headers['host'] + '/' + req.file.path;

                let activityTrackerKey = -1;
                if (req.body && req.body.activityTrackerKey) {
                    activityTrackerKey = req.body.activityTrackerKey;
                }

                const response = await dataItemController.createDataItem(absolute_path, activityTrackerKey);
                if (response.error) {
                    await fileService.deleteFile(req.file.path);
                    res.status(response.error.code);
                    res.json(response.error.content);
                    res.end();
                } else {
                    res.json(response.getPublicData())
                }
            }
        }
    );

    app.route('/api/data-item/all').get(async (req, res, next) => {
        const response = await dataItemController.getAllDataItems();
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            res.json(response.map(x => x.getPublicData()))
        }
    });

    app.route('/api/data-item/:id').get(async (req, res, next) => {
        const response = await dataItemController.getDataItemByExternalId(req.params.id);
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            res.json(response.getPublicData())
        }
    });
};
