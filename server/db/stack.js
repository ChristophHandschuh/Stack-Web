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
    cardsNew: {
        type: Number,
        default: 0,
    },
    cardsLearning: {
        type: Number,
        default: 0,
    },
    cardsLearned: {
        type: Number,
        default: 0,
    },
},{
    versionKey: false
});

const stackModel = mongoose.model("stack", stackSchema)
module.exports = stackModel;