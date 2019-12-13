module.exports = (app, injector) => {

    const dataDownloadService = injector.inject_service('DataDownloadService');

    app.route('/api/data/download').get(async (req, res, next) => {
        const response = await dataDownloadService.dataDownload();
        const absolute_path = req.protocol + '://' + req.headers['host'] + response.path;
        res.json({
            path: absolute_path,
            isAll: response.isAll
        });

    });
};
