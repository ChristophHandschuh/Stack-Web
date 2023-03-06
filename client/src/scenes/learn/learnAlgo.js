function unixtimetoutc(unixtime){
    var date = new Date(unixtime);
    var utc = date.toUTCString();
    return utc;
}

const learnAlgo = (res, cards, cards_content) => {
    var card_now = {};
    
    //when res is true, it means the user got the question right
    //the cards[0].time should be updated to 5 minutes in the future and sorted in the array with ascending time
    if(res == true){
        cards[0].time = Date.now() + 300000;
        cards.sort((a, b) => a.time - b.time);
    }else if(res == false){
        //when res is false, it means the user got the question wrong
        //the cards[0].time should be updated to 1 minute in the future and sorted in the array with ascending time
        cards[0].time = Date.now() + 60000;
        cards.sort((a, b) => a.time - b.time);
    };

    console.log("Time now:", unixtimetoutc(Date.now()));
    for(let i=0; i < cards.length; i++){
        console.log(cards_content.filter(item => item._id === cards[i].card_id)[0].front, unixtimetoutc(cards[i].time));
    }    

    //check if card.date is more then 1 minute in the future
    console.log(Date.now() + 60000 > cards[0].time);
    if(Date.now() + 60000 >= cards[0].time){
        card_now = cards_content.filter(item => item._id === cards[0].card_id)[0];
        return card_now;
    }else{
        return null;
    };
};

export default learnAlgo;