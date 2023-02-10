import { Box, Grid } from "@mui/material";
import CardBrowser from "./CardBrowser";
import CardCreator from "./CardCreator";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

const Create = () => {
    const { stacks, loading, error } = useStoreState(state => state);
    const getStacks = useStoreActions(actions => actions.getStacks);

    useEffect(() => {
        getStacks();
    }, []); //[id]

    if(stacks.length > 0){
        return (
            <Box>
                <Grid container>
                    <Grid item xs>
                        {<Header/>}
                        {<CardCreator/>}
                    </Grid>
                    <Grid item>
                        {<CardBrowser/>}
                    </Grid>
                </Grid>
            </Box>
        );
    }
}
 
export default Create;