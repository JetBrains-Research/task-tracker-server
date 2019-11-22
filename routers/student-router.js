module.exports = (app, injector, upload) => {

    const studentController = injector.inject_controller("StudentController");

    app.route("/api/student").post(async (req, res, next) => {
        const response = await studentController.createStudent(req.body.username, req.body.age, req.body.experience);
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            res.json({
                student: response.getPublicData()
            })
        }
    });

    app.route("/api/student/:username").get(async (req, res, next) => {
        const response = await studentController.getStudentByUsername(req.params.username);
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            res.json({
                student: response.getPublicData()
            })
        }
    });
};
