const mongoose = require("mongoose");
const ActivityTrackerItem = mongoose.model("ActivityTrackerItem");

const createActivityTrackerItem = async () => {
    const activityTrackerItem = new ActivityTrackerItem({
    });
    return await activityTrackerItem.save();
};

const addCodePath = async (codePath, activityTrackerItem) => {
    activityTrackerItem.codePath = codePath;
    return await activityTrackerItem.save();
};

const getActivityTrackerItemByExternalId = async (externalId) => {
    return await ActivityTrackerItem.findOne({
        externalActivityTrackerItemId: externalId
    })
};

const getAllActivityTrackerItems = async () => {
    return await ActivityTrackerItem.find();
};

module.exports = {
    createActivityTrackerItem,
    getActivityTrackerItemByExternalId,
    getAllActivityTrackerItems,
    addCodePath
};
