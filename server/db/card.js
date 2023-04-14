const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    front:{
        type: String,
    },
    back:{
        type: String,
    },
    answers:{
        type: Object,
    },
    usage: {
        type: Number,
        default: 1,
    }
},{
    versionKey: false
});

const cardModel = mongoose.model("card", cardSchema)
module.exports = cardModel;


// function add_flashcard(type, content, flashcards){
//     if(type="normal"){
//         flashcards.push({"type": type, "front": content["front"], "back": content["back"]});
//     }
// }

// module.exports = {"add_flashcard": add_flashcard};