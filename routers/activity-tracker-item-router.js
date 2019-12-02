module.exports = (app, injector, upload) => {

    const activityTrackerItemController = injector.inject_controller('ActivityTrackerItemController');
    const fileService = injector.inject_service('FileService');
    const errorsConsts = injector.inject_const_file('Errors');

    const intelLogger = require('intel');
    const logger = intelLogger.getLogger('logger');

    app.route('/api/activity-tracker-item').post(async (req, res, next) => {
        const response = await activityTrackerItemController.createActivityTrackerItem();
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            res.json(response.getPublicData())
        }
    });

    app.route('/api/activity-tracker-item/:id').put(upload.single('code'), async (req, res, next) => {
        if (!req.file) {
            const error = errorsConsts['validation']['file']['notReceived'];
            logger.error(`${new Date()}: file was not received`, new Error('File was not received'));
            res.status(error.code);
            res.json(error.content);
            res.end();
        } else {
            const absolute_path = req.protocol + '://' + req.headers['host'] + '/' + req.file.path;

            const response = await activityTrackerItemController.addCodePath(absolute_path, req.params.id);
            if (response.error) {
                res.status(response.error.code);
                res.json(response.error.content);
                res.end();
            } else {
                res.json(response.getPublicData())
            }
        }
    });

    app.route('/api/activity-tracker-item/all').get(async (req, res, next) => {
        const response = await activityTrackerItemController.getAllActivityTrackerItems();
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            res.json(response.map(x => x.getPublicData()))
        }
    });

    app.route('/api/activity-tracker-item/:id').get(async (req, res, next) => {
        const response = await activityTrackerItemController.getActivityTrackerItemByExternalId(req.params.id);
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            res.json(response.getPublicData())
        }
    });
};
