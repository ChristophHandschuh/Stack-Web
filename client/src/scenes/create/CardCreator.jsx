import { Box, Typography } from "@mui/material";
import ContentEditable from "react-contenteditable";
import { useTheme } from "@mui/material";
import CardSideButton from "./Buttons/CardSideButton";
import CardTypeButton from "./Buttons/CardTypeButton";
import Card from "./Card";
import { useEffect, useState } from "react";
import { useStoreActions } from "easy-peasy";
import CardFinishButton from "./Buttons/CardFinishButton";

const CardCreator = (props) => {
    const [CardSide, setCardSide] = useState(true);
    
    return (
        <Box display="flex" flexDirection="column" style={{height: "calc(100vh - 4.5rem)"}}>
            <CardSideButton CardSide={CardSide} setCardSide={setCardSide}/>
            <Card CardSide={CardSide} CardData={props.CardData} setCardData={props.setCardData}/>
            {/* <CardTypeButton CardType={CardType} setCardType={setCardType}/> */}
            <CardFinishButton CardData={props.CardData} setCardData={props.setCardData}/>
        </Box>
    )
}
 
export default CardCreator;