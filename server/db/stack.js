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
    flashcards: {
        type: Object,
        default: []
    },
    color: {
        type: String,
        default: "#EE8989",
    },
    cardsFalse: {
        type: Number,
        default: 0
    },
    cardsRight: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},{
    versionKey: false
});

const stackModel = mongoose.model("stack", stackSchema)
module.exports = stackModel;