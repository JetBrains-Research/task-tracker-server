// Copyright (c) 2020 Anastasiia Birillo

const BASE_URL = {
    ATI: '/api/activity-tracker-item',
    DI: '/api/data-item',
    TASK: '/api/task'
};

// Todo: in the old version we use CODE name
const DI_UPLOADED_FILE = 'codetracker';
const LOGGER_NAME = 'logger';

const LANGUAGES = ['ru', 'en'];

module.exports = {
    BASE_URL,
    LANGUAGES,
    LOGGER_NAME,
    DI_UPLOADED_FILE,
};
