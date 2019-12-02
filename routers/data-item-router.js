module.exports = (app, injector, upload) => {

    const dataItemController = injector.inject_controller('DataItemController');
    const fileService = injector.inject_service('FileService');
    const errorsConsts = injector.inject_const_file('Errors');

    const intelLogger = require('intel');
    const logger = intelLogger.getLogger('logger');

    app.route('/api/data-item').post(upload.single('code'), async (req, res, next) => {
        if (!req.file) {
            const error = errorsConsts['validation']['file']['notReceived'];
            logger.error(`${new Date()}: file was not received`, new Error('File was not received'));
            res.status(error.code);
            res.json(error.content);
            res.end();
        } else {
            const absolute_path = req.protocol + '://' + req.headers['host'] + '/' + req.file.path;

            const response = await dataItemController.createDataItem(absolute_path);
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
)
    ;

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

    app.route('/api/data-item/archive').get(async (req, res, next) => {
        const response = await dataItemController.createArchive();
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            const absolute_path = req.protocol + '://' + req.headers['host'];
            res.json(absolute_path + response)
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
