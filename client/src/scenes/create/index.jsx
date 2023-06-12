import { Box, Grid } from "@mui/material";
import CardOptions from "./CardOptions";
import CardCreator from "./CardCreator";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useParams } from "react-router-dom";
import axios from "axios";

const Create = () => {
    const { stacks, loading, error } = useStoreState(state => state);
    const getStacks = useStoreActions(actions => actions.getStacks);
    const [CardData, setCardData] = useState({ type: "normal", front: "", back: "" });
    const { id } = useParams();
    const { card_id } = useParams();

    useEffect(() => {
        getStacks();
        if (card_id != undefined) {
            const getCardData = async () => {
                const response = await axios.get("https://stack-study.me:3001/cardData", { params: { _id: stacks[id - 1].cards[card_id].card_id } });
                setCardData(response.data);
            };
            getCardData();
        } else {
            setCardData({ type: "normal", front: "Enter your knowledge...", back: "Enter your knowledge..." });
        };
    }, []); //[id]

    if (stacks.length > 0) {
        return (
            <Box>
                <Grid container>
                    <Grid item xs>
                        {<Header />}
                        {<CardCreator CardData={CardData} setCardData={setCardData} />}
                    </Grid>
                    <Grid item>
                        {<CardOptions CardData={CardData} setCardData={setCardData} />}
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default Create;