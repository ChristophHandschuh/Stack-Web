import { Box, Typography } from "@mui/material";
import { useState } from "react";
import ContentEditable from "react-contenteditable";
import { useEffect } from "react";

var CardData = {type: "normal", front: "Enter your knowledge...", back: "Enter your knowledge..."};

const Card = (props) => {
    const[cardNormalText, setCardNormalText] = useState("");

    useEffect(()=>{
        if(props.CardSide){
            setCardNormalText(CardData.front);
        }else{
            setCardNormalText(CardData.back);
        }
    }, [props.CardSide])

    if(props.CardType == "n"){
        const changeCardNormalText = (text) => {
            if(props.CardSide){
                CardData.front = text;
            }else{
                CardData.back = text;
            }
            setCardNormalText(text);
            props.setCardData(CardData);
        }

        return (
            <Box flexGrow="3" width="100%" display="flex" px="2rem" flexDirection="column" justifyContent="center" alignItems="center">
                <Box border="1px solid #adadad" display="flex" width="100%" maxWidth="60rem" alignItems="center" justifyContent="center" sx={{ boxShadow: 8 }} borderRadius="0.6rem" px="3rem" style={{aspectRatio: 16/9}}>
                    <Typography style={{wordBreak: "break-word"}} variant="h4" mx="1.2rem" fontWeight="500" color="#000" ><ContentEditable html={cardNormalText} onChange={(e) => changeCardNormalText(e.target.value)}/></Typography>
                </Box>
            </Box>
        );
    }
}
 
export default Card;