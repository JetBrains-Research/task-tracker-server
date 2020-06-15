const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const app = express();
const intelLogger = require('intel');
const fs = require('fs');

const multer = require('multer');
const body_parser = require('body-parser');

app.use(body_parser.json({limit: '50mb'}));
app.use(body_parser.urlencoded({extended: true, limit: '50mb'}));
app.use('/uploads', express.static('uploads'));
app.use('/download', express.static('download'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

const dotenv = require('dotenv');
dotenv.config();

// Connect to database
const MONGODB = process.env.MONGODB || 'mongodb://localhost/coding-assistant';
mongoose.connect(MONGODB, {
    useNewUrlParser: true
});

// Set the uploads dir
const uploadsDir = './uploads';
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

// Set the logger
const loggerDir = './logs';
if (!fs.existsSync(loggerDir)) {
    fs.mkdirSync(loggerDir);
}
const logger = intelLogger.getLogger('logger');
logger.addHandler(new intelLogger.handlers.File(loggerDir + '/logs.log'));


const injector = require('./injector');
const upload = injector.injectConfiguration('MulterConfiguration', multer);

injector.injectObject(injector.objectType.MODELS);
injector.injectRouters(app, injector, upload);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger.info(`${new Date()}: Server is listening on port ${PORT}`);
});
