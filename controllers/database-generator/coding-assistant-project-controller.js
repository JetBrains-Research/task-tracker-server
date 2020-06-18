// Copyright (c) 2020 Anastasiia Birillo

const TASKS = require('../../configs/coding-assistant-sources/tasks');
const GENDERS = require('../../configs/coding-assistant-sources/genders');
const SETTINGS = require('../../configs/coding-assistant-sources/settings');
const COUNTRIES = require('../../configs/coding-assistant-sources/countries');
const EXPERIENCES = require('../../configs/coding-assistant-sources/experiences');

const taskController = require('../task-controller');
const settingsController = require('../settings-controller');
const genderController = require('../consts-lists/gender-controller');
const countryController = require('../consts-lists/country-controller');
const experienceController = require('../consts-lists/experience-controller');

const createTasks = async () => {
    TASKS.forEach(async task =>
        await taskController.createTask(task.key, task.descriptions, task.examples));
};

const createGenders = async () => {
    GENDERS.forEach(async gender =>
        await genderController.createGender(gender.key, gender.descriptions));
};

const createSettings = async () => {
    await settingsController.createSettings(SETTINGS.descriptions);
};

const createCountries = async () => {
    COUNTRIES.forEach(async country =>
        await countryController.createCountry(country.key, country.descriptions));
};

const createExperiences = async () => {
    EXPERIENCES.forEach(async experiences =>
        await experienceController.createExperience(experiences.key, experiences.descriptions));
};

const generateDatabase = async () => {
    await createSettings();
    await createGenders();
    await createCountries();
    await createExperiences();
    await createTasks();
};

module.exports = {
    generateDatabase,
};
