const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userModel = require("./db/user");
const stackModel = require("./db/stack");
const cardModel = require("./db/card");

const app = express();


app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST",],
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    key: "userId",
    secret: "secret",
    resave: false,
    saveUninitilized: false,
    cookie: {
        expires: 60 * 60 * 60* 24 * 1000,
    }
}))

mongoose.connect("mongodb://localhost:27017/stack", {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

const saltRoundes = 10


app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;


    bcrypt.hash(password, saltRoundes, async function (err, hash){
        if (err) {
            console.log(err);
        }else{
            const user = new userModel({ username: username, password: hash });
            await user.save();
        }
    })

    res.send("asf");
});

app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true });  //id: req.session.user[0]._id, username: req.session.user[0].username
    } else {
        res.send({ loggedIn: false });
    }
})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    userModel.find({ username: username }, function (err, result) {
        if(err){
            console.log(err);
        }else{
            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (err, response) => {
                    if (response) {
                        req.session.user = result;

                        res.send({ loggedIn: true });
                    } else {
                        res.send({ loggedIn : false });
                    }
                });
            }
        }
    });
});

app.get("/stacks", (req, res) => {
    if(req.session.hasOwnProperty("user")){
        const id = req.session.user[0]._id;
        stackModel.find({ userID:id }).sort({"createdAt": -1}).exec((err, results) => {
            if(err){
                console.log(err);
                res.send(err);
            }else{
                // for(let i = 0; i < results.length; i++)
                // {
                //     for(let j = 0; j < results[i].cards.length; j++)
                //     {
                //         const result = await cardModel.find({ _id: results[i].cards[j].card_id });
                //         results[i].cards[j] = result[0];
                //     }
                // }
                res.send({ results: results });
            }
        });
    }else{
        res.send("Please login first!");
    }

});

app.get("/cards", (req, res) => {
    if(req.session.hasOwnProperty("user")){
        stackModel.find({ _id:req.query._id }).exec( async (err, result) => {
            if(err){
                console.log(err);
                res.send(err);
            }else{
                let response = [];
                for(let i = 0; i < result[0].cards.length; i++)
                {
                    const card = await cardModel.find({ _id: result[0].cards[i].card_id });
                    response.push(card[0]);
                }
                res.send(response);
            }
        });
    }else{
        res.send("Please login first!");
    }

});

//route "/cardData" is used to get the data of a card by its id
app.get("/cardData", (req, res) => {
    if(req.session.hasOwnProperty("user")){
        cardModel.find({ _id:req.query._id }).exec((err, result) => {
            if(err){
                console.log(err);
                res.send(err);
            }else{
                res.send(result[0]);
            }
        });
    }else{
        res.send("Please login first!");
    }
});

//route "/editcard" is a post route, which gets the content of the card and edits its database entry
app.post("/editcard", (req, res) => {
    if(req.session.hasOwnProperty("user")){ //Not secure!! :()
            var obj_arr = [];
            var obj = {};
            Object.keys(req.body.payload).forEach(key => {
                obj = {};
                obj[key] = req.body.payload[key];
                obj_arr.push(obj);
            });
            for(let i = 1; i< obj_arr.length; i++){
                cardModel.findByIdAndUpdate(req.body.payload._id, obj_arr[i]).exec((err, result) => {
                    if(err){
                        console.log(err);
                        res.send(err);
                    }
                });
            }
            res.status(200);
    }else{
        res.send("Please login first!");
    }
});

app.post("/stackname", (req, res) => {
    if(req.session.hasOwnProperty("user")){ //Not secure!! :()
        stackModel.findByIdAndUpdate({ _id:req.body._id },{name:req.body.name}, function (err, results) {
            if(err){
                console.log(err);
                res.send({status: false}, err);
            }else{
                res.send({status: true});
            }
        });
    }else{
        res.send("Please login first!");
    }
});

app.get("/newstack", (req, res) => {
    const id = req.session.user[0]._id;
    if(req.session.hasOwnProperty("user")){ //Not secure!! :()
        const stack = new stackModel({ name: "New Stack", userID:id });
        stack.save();
        res.send(stack);
    }
});

app.post("/newcard", (req, res) => {
    const id = req.session.user[0]._id;
    let reqb = req.body;
    console.log("new card");
    if(req.session.hasOwnProperty("user")){ //Not secure!! :()
        console.log(reqb.type);
        if(reqb.type === "normal"){
            const card = new cardModel({ type: reqb.type, front: reqb.front, back: reqb.back });
            card.save().then(doc => {
                stackModel.findByIdAndUpdate({ _id:reqb._id },{ $push: {cards: {card_id: card._id.toString(), status:"new", ease_factor: 250, step_index: 0, time: Date.now(), interval: 0}}, $inc:{ cardsNew: 1 }}, function (err, results) {
                    if(err){
                        // res.send({status: false}, err);
                        res.send(err);
                    }else{
                        res.send("success");
                        // res.send({status: true});
                    }
                });
            }).catch(error => {
                res.send("error");
            });
        }
    }
});


// app.post("/flashcardcontent", (req, res) => {
//     if(req.session.hasOwnProperty("user")){ //Not secure!! :()
//         stackModel.findByIdAndUpdate(req.body._id, { $set: {[`flashcards.${req.body.flashcard_id}`]:req.body.flashcard}}, function (err, result) {
//             if(err){
//                 console.log(err);
//                 res.send({status: false}, err);
//             }else{
//                 res.send({status: true});
//             }
//         });
//     }else{
//         res.send("Please login first!");
//     }
// });


app.listen(3001, () => {
    console.log("Server running!");
});