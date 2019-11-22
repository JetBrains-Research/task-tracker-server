const mongoose = require("mongoose");
const Student = mongoose.model("Student");

const createStudent = async (username, age, experience) => {
    const student = new Student({
        username: username,
        age: age,
        experience: experience
    });
    return await student.save();
};

const getStudentByUsername = async (username) => {
    return await Student.findOne({
        username: username
    })
};

const getStudentByExternalId = async (externalId) => {
    return await Student.findOne({
        externalStudentId: externalId
    })
};

module.exports = {
    createStudent,
    getStudentByUsername,
    getStudentByExternalId
};
