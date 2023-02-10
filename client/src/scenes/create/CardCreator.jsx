import { Box, Typography } from "@mui/material";
import ContentEditable from "react-contenteditable";
import { useTheme } from "@mui/material";
import CardSideButton from "./Buttons/CardSideButton";
import CardTypeButton from "./Buttons/CardTypeButton";
import Card from "./Card";
import { useEffect, useState } from "react";
import { useStoreActions } from "easy-peasy";
import CardFinishButton from "./Buttons/CardFinishButton";

const CardCreator = () => {
    const [CardType, setCardType] = useState("n");
    const [CardSide, setCardSide] = useState(true);
    const [CardData, setCardData] = useState({type: "normal", front: "Enter your knowledge...", back: "Enter your knowledge..."});

    return (
        <Box display="flex" flexDirection="column" style={{height: "calc(100vh - 4.5rem)"}}>
            <CardSideButton CardSide={CardSide} setCardSide={setCardSide}/>
            <Card CardSide={CardSide} CardType={CardType} setCardData={setCardData}/>
            {/* <CardTypeButton CardType={CardType} setCardType={setCardType}/> */}
            <CardFinishButton CardData={CardData}/>
        </Box>
    )
}
 
export default CardCreator;