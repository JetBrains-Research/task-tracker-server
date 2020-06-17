// Copyright (c) 2020 Anastasiia Birillo

const LANGUAGES = require('../../consts/consts').LANGUAGES;
const experienceDao = require('../../daos/consts-lists/experience-dao');

const createExperience = async (key, descriptions) => {
    let preparedDescriptions = [];
    for(const description of descriptions){
        if (LANGUAGES.indexOf(description.language) > -1) {
            preparedDescriptions.push(description);
        }
    }
    return await experienceDao.createExperience(key, preparedDescriptions);
};

const getExperienceByKey = async (key) => {
    return await experienceDao.getExperienceByKey(key);
};

const getAllExperiences = async () => {
    return await experienceDao.getAllExperiences();
};

const deleteExperience = async (experience) => {
    return await experienceDao.deleteExperience(experience);
};

module.exports = {
    createExperience,
    deleteExperience,
    getAllExperiences,
    getExperienceByKey,
};
