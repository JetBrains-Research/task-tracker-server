module.exports = (app, injector, upload) => {

    const dataItemController = injector.inject_controller("DataItemController");
    const fileService = injector.inject_service("FileService");

    app.route("/api/data-item").post(upload.single("code"), async (req, res, next) => {
        const absolute_path = req.protocol + "://" + req.headers["host"] + "/" + req.file.path;
        const response = await dataItemController.createDataItem(req.body.projectId, absolute_path);
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

    app.route("/api/data-item").put(upload.single("code"), async (req, res, next) => {
        const absolute_path = req.protocol + "://" + req.headers["host"] + "/" + req.file.path;
        const response = await dataItemController.addPathToDataItem(req.body.projectId, absolute_path);
        if (response.error) {
            await fileService.deleteFile(req.file.path);
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            console.log(response);
            res.json({
                dataItem: response.getPublicData()
            })
        }
    });
};
