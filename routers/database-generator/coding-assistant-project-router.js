// Copyright (c) 2020 Anastasiia Birillo

const BASE_URL = require('../../consts/consts').BASE_URL;
const codingAssistantProjectController = require('../../controllers/database-generator/coding-assistant-project-controller');

module.exports = (app) => {

    app.route(`${BASE_URL.DATABASE_GENERATOR.CODING_ASSISTANT}`).post(async (req, res, next) => {
        await codingAssistantProjectController.generateDatabase();
        res.json('Database was generated successfully');
    });
};
