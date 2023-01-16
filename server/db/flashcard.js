function add_flashcard(type, content, flashcards){
    if(type="normal"){
        flashcards.push({"type": type, "front": content["front"], "back": content["back"]});
    }
}

module.exports = {"add_flashcard": add_flashcard};