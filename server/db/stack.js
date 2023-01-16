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
    },
})

const stackModel = mongoose.model("stack", stackSchema)
module.exports = stackModel;