// Copyright (c) 2020 Anastasiia Birillo

const mongoose = require('mongoose');

const Experience = mongoose.model('Experience');

const createExperience = async (key, descriptions) => {
    const experience = new Experience({
        key: key
    });
    for(const description of descriptions){
        experience[description.language] = description.value;
    }
    return await experience.save();
};

const getExperienceByKey = async (key) => {
    return await Experience.findOne({
        key: key
    })
};

const getAllExperiences = async () => {
    return await Experience.find();
};

const deleteExperience = async (experience) => {
    return await experience.remove();
};

module.exports = {
    createExperience,
    deleteExperience,
    getAllExperiences,
    getExperienceByKey,
};
