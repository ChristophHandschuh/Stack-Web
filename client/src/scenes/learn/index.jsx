import { Box, Typography } from "@mui/material";
import Flipcard from "../../components/Flipcard";
import AspectRatio from '@mui/joy/AspectRatio';
import Header from "../../components/Header";
import FeedBackButton from "./FeedBackButton";
import StatusBar from "./StatusBar";
import { useParams } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";
import TurnButton from "./TurnButton";
import learnAlgo from "./learnAlgo";

const Learn = () => {
    const { id } = useParams();
    const stacks = useStoreState((state) => state.stacks);
    const cards = stacks[id - 1].cards;
    const cards_content = useStoreState((state) => state.cards);
    const [isFlipped, setIsFlipped] = useState(false)
    const [cardText, setcardText] = useState("");
    var card_now = {};

    card_now = learnAlgo(null, cards, cards_content);

    const feedback = (res) => {
        card_now = learnAlgo(res, cards, cards_content);
        setIsFlipped(false);
    };

    useEffect(() => {
        if(card_now!==null){
            if(!isFlipped)
            {
                setcardText(card_now.front);
            }else{
                setcardText(card_now.back);
            }
        }
    }, [isFlipped]);

    if(card_now !== null){
        return (
            <Box>
                <StatusBar />
                <Box display="flex" alignItems="center" justifyContent="center" px="4rem" style={{height: "calc(100vh - 10rem)"}}>
                    <Box border="1px solid #adadad" display="flex" width="100%" maxWidth="60rem" alignItems="center" justifyContent="center" sx={{ boxShadow: 8 }} style={{aspectRatio: 16/9}} borderRadius="0.6rem" px="3rem">
                        <Typography variant="h4" mx="1.2rem" fontWeight="500" color="#000" >{cardText}</Typography>
                    </Box>
                </Box>
                {!isFlipped && <TurnButton setIsFlipped={setIsFlipped}/>}
                {isFlipped && <FeedBackButton feedback={feedback}/>}
            </Box>
        );
    }else{
        return(<Box><StatusBar /><Typography variant="h2">You made great progress!</Typography></Box>);
    }
}
 
export default Learn;