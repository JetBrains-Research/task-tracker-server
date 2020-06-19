// Copyright (c) 2020 Anastasiia Birillo

const consts = require('../consts/consts');
const BASE_URL = require('../consts/consts').BASE_URL;

module.exports = (app) => {

    app.route(`${BASE_URL.LANGUAGE}/all`).get(async (req, res, next) => {
        logger.info(`${new Date()}: ${consts.LANGUAGES.length} languages were received successfully`);
        res.json(consts.LANGUAGES);
    });

};
