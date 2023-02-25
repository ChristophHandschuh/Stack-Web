import { Box, Typography } from "@mui/material";
import { useRef, useState } from "react";
import ContentEditable from "react-contenteditable";
import { useEffect } from "react";

var CardData = {type: "normal", front: "Enter your knowledge...", back: "Enter your knowledge..."};

const Card = (props) => {
    const[cardNormalText, setCardNormalText] = useState("");
    const ref = useRef();

    // useEffect(() => {
    //     CardData = props.CardData;
    // }, [props.CardData]);

    useEffect(()=>{
        if(props.CardSide){
            setCardNormalText(props.CardData.front);
        }else{
            setCardNormalText(props.CardData.back);
        }
    }, [props.CardSide, props.CardData])

    if(props.CardData["type"] === "normal"){
        const changeCardNormalText = (text) => {
            if(props.CardSide){
                props.CardData.front = text;
            }else{
                props.CardData.back = text;
            }
            setCardNormalText(text);
            props.setCardData(CardData);
        }

        return (
            <Box flexGrow="3" width="100%" display="flex" px="2rem" flexDirection="column" justifyContent="center" alignItems="center">
                <Box onClick={() => ref.current.focus()} border="1px solid #adadad" display="flex" width="100%" maxWidth="60rem" alignItems="center" justifyContent="center" sx={{ boxShadow: 8 }} borderRadius="0.6rem" px="3rem" style={{aspectRatio: 16/9}}>
                    <Typography style={{wordBreak: "break-word"}} variant="h4" mx="1.2rem" fontWeight="500" color="#000"><ContentEditable innerRef={ref} html={cardNormalText} onChange={(e) => changeCardNormalText(e.target.value)}/></Typography>
                </Box>
            </Box>
        );
    }
}
 
export default Card;