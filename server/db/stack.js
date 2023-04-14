const mongoose = require("mongoose");

const stackSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: "#EE8989",
    },
    cards: {
        type: Object,
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
},{
    versionKey: false
});

const stackModel = mongoose.model("stack", stackSchema)
module.exports = stackModel;