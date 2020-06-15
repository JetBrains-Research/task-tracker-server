module.exports = (app, injector) => {

    const dataDownloadService = injector.injectObject(injector.objectType.SERVICE, 'DataDownloadService');

    app.route('/api/data/download').get(async (req, res, next) => {
        const response = await dataDownloadService.dataDownload();
        const absolute_path = req.protocol + '://' + req.headers['host'] + response.path;
        res.json({
            path: absolute_path,
            isAll: response.isAll
        });

    });
};
