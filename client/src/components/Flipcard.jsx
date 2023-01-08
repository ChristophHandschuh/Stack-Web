import { useState } from "react";
import { FlashcardArray, Flashcard } from "react-quizlet-flashcard";

const Flipcard = ({ frontside, backside }) => {

    const CardStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontSize: "25px"
      };

    return (
        <Flashcard frontHTML={`<h2>${frontside}</h2>`} backHTML={`<h2>${backside}</h2>`} frontContentStyle={CardStyle} backContentStyle={CardStyle} />
    );
}
 
export default Flipcard;