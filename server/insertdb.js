const mongoose = require("mongoose");
const stackModel = require("./db/stack");
const flashcard_helper = require("./db/flashcard");

mongoose.connect("mongodb://localhost:27017/stack", {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

// flashcards = [{"type": "normal", "front": "front", "back": "back"}]
// flashcard_helper.add_flashcard("normal", {"front": "text", "back": "hs"}, flashcards)
// console.log(flashcards);

// const user = new stackModel({ userID: "63b70dd8c8999a7064f1e6ab" ,name: "Test", flashcards: flashcards});
// user.save();

stackModel.find({ userID:"63b70dd8c8999a7064f1e6ab" }, function (err, result) {
   if(err){
       console.log(err);
   }else{
       console.log(result);
       res.send("Yes");
   }
});