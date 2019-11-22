module.exports = (app, injector, upload) => {

    const taskSolutionItemController = injector.inject_controller("TaskSolutionItemController");
    const fileService = injector.inject_service("FileService");

    app.route("/api/task-solution-item").get(async (req, res, next) => {
        const response = await taskSolutionItemController.getAllTSI();
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            let items = [];
            for (const item of response) {
                items.push(await item.getAsyncPublicData())
            }
            res.json({
                taskSolutionItems: items
            })
        }
    });

    app.route("/api/task-solution-item/student/:username/task/:taskKey")
        .post(upload.single("code"), async (req, res, next) => {
        const absolute_path = req.protocol + "://" + req.headers["host"] + "/" + req.file.path;
        const response = await taskSolutionItemController
            .createTSI(req.params.username, req.params.taskKey, absolute_path);
        if (response.error) {
            await fileService.deleteFile(req.file.path);
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            res.json({
                taskSolutionItem: await response.getAsyncPublicData()
            })
        }
    });

    app.route("/api/task-solution-item/task/:taskId").get(async (req, res, next) => {
        const response = await taskSolutionItemController.getTSIByTaskId(req.params.taskId);
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            let items = [];
            for (const item of response) {
                items.push(await item.getAsyncPublicData())
            }
            res.json({
                taskSolutionItems: items
            })
        }
    });

    app.route("/api/task-solution-item/student/:studentId").get(async (req, res, next) => {
        const response = await taskSolutionItemController.getTSIByStudentId(req.params.studentId);
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            let items = [];
            for (const item of response) {
                items.push(await item.getAsyncPublicData())
            }
            res.json({
                taskSolutionItems: items
            })
        }
    });

    app.route("/api/task-solution-item/student/:studentId/task/:taskId").get(async (req, res, next) => {
        const response = await taskSolutionItemController
            .getTSIByStudentIdAndTaskId(req.params.taskId, req.params.studentId);
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            let items = [];
            for (const item of response) {
                items.push(await item.getAsyncPublicData())
            }
            res.json({
                taskSolutionItems: items
            })
        }
    });
};
