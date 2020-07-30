// Copyright (c) 2020 Anastasiia Birillo

const mongoose = require("mongoose");
const Student = mongoose.model("Student");

const createStudent = async () => {
    const student = new Student({});
    return await student.save();
};

const addData = async (student, diId, atiId) => {
    student.data.push({
        activityTrackerKey: atiId,
        dataItemKey: diId
    });
    return await student.save();
};

const getStudentByExternalId = async (externalId) => {
    return await Student.findOne({
        externalStudentId: externalId
    })
};

const getAllStudents = async () => {
    return await Student.find();
};

module.exports = {
    addData,
    createStudent,
    getAllStudents,
    getStudentByExternalId
};

