module.exports = (app, injector, upload) => {

    const dataItemController = injector.inject_controller("DataItemController");
    const fileService = injector.inject_service("FileService");

    app.route("/api/data-item").post(upload.single("code"), async (req, res, next) => {
        const absolute_path = req.protocol + "://" + req.headers["host"] + "/" + req.file.path;
        const response = await dataItemController.createDataItem(absolute_path);
        if (response.error) {
            await fileService.deleteFile(req.file.path);
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            res.json({
                dataItem: response.getPublicData()
            })
        }
    });

    app.route("/api/data-item/all").get(async (req, res, next) => {
        const response = await dataItemController.getAllDataItems();
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            res.json({
                dataItems: response.map(x => x.getPublicData())
            })
        }
    });

    app.route("/api/data-item/:id").get(async (req, res, next) => {
        const response = await dataItemController.getDataItemByExternalId(req.params.id);
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            res.json({
                dataItem: response.getPublicData()
            })
        }
    });
};
