// Copyright (c) 2020 Anastasiia Birillo

const intelLogger = require('intel');

const ERRORS = require('../../consts/errors').ERRORS;
const LOGGER_NAME = require('../../consts/consts').LOGGER_NAME;
const experienceService = require('../../services/consts-lists/experience-service');

const logger = intelLogger.getLogger(LOGGER_NAME);

const getExperienceByKey = async (key) => {
    const experience = await experienceService.getExperienceByKey(key);

    if (!experience) {
        logger.error(`${new Date()}: Experience ${key} is not exists`, new Error(`Experience ${key} is not exists`));
        return {
            error: ERRORS.VALIDATION.EXPERIENCE.NOT_EXISTS
        }
    }

    logger.info(`${new Date()}: Experience ${key} was received successfully`);
    return experience;
};

const createExperience = async (key, descriptions) => {
    const experience = await experienceService.getExperienceByKey(key);

    if (experience) {
        logger.error(`${new Date()}: Experience ${key} was not created`, new Error(`Experience ${key} is already taken`));
        return {
            error: ERRORS.VALIDATION.EXPERIENCE.ALREADY_TAKEN
        }
    }

    return await experienceService.createExperience(key, descriptions);
};

const deleteExperienceByKey = async (key) => {
    const experience = await experienceService.getExperienceByKey(key);

    if (!experience) {
        logger.error(`${new Date()}: Experience ${key} is not exists`, new Error(`Experience ${key} is not exists`));
        return {
            error: ERRORS.VALIDATION.EXPERIENCE.NOT_EXISTS
        }
    }

    logger.info(`${new Date()}: Experience ${key} was deleted successfully`);
    return await experienceService.deleteExperience(experience);
};

const getAllExperiences = async () => {
    const experiences = await experienceService.getAllExperiences();
    logger.info(`${new Date()}: ${experiences.length} experiences were received successfully`);
    return experiences;
};

module.exports = {
    createExperience,
    getAllExperiences,
    getExperienceByKey,
    deleteExperienceByKey,
};

