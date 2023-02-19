import { Box, Grid } from "@mui/material";
import CardOptions from "./CardOptions";
import CardCreator from "./CardCreator";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

const Create = () => {
    const { stacks, loading, error } = useStoreState(state => state);
    const getStacks = useStoreActions(actions => actions.getStacks);
    const [CardType, setCardType] = useState("n");

    useEffect(() => {
        getStacks();
    }, []); //[id]

    if(stacks.length > 0){
        return (
            <Box>
                <Grid container>
                    <Grid item xs>
                        {<Header/>}
                        {<CardCreator CardType={CardType}/>}
                    </Grid>
                    <Grid item>
                        {<CardOptions CardType={CardType} setCardType={setCardType}/>}
                    </Grid>
                </Grid>
            </Box>
        );
    }
}
 
export default Create;