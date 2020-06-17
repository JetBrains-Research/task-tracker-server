// Copyright (c) 2020 Anastasiia Birillo

const BASE_URL = require('../../consts/consts').BASE_URL;
const experienceController = require('../../controllers/consts-lists/experience-controller');

module.exports = (app) => {

    app.route(`${BASE_URL.EXPERIENCE}`).post(async (req, res, next) => {
        const response = await experienceController.createExperience(req.body.key.toLowerCase(), req.body.descriptions);
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            res.json(response.getPublicData())
        }
    });

    app.route(`${BASE_URL.EXPERIENCE}/all`).get(async (req, res, next) => {
        const response = await experienceController.getAllExperiences();
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            res.json(response.map(function (gender) {
                return gender.getPublicData();
            }));
        }
    });

    app.route(`${BASE_URL.EXPERIENCE}/:key`).get(async (req, res, next) => {
        const response = await experienceController.getExperienceByKey(req.params.key.toLowerCase());
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            res.json(response.getPublicData())
        }
    });

    app.route(`${BASE_URL.EXPERIENCE}/:key`).delete(async (req, res, next) => {
        const response = await experienceController.deleteExperienceByKey(req.params.key.toLowerCase());
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            res.json(response.getPublicData())
        }
    });

};
