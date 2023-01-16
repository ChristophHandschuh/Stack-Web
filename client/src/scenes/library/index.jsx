import { Box, Grid, Typography, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import { tokens } from "../../theme";
import StackBrowser from "./StackBrowser";
import Header from "./Header";
import StackInspektor from "./StackInspektor";
import axios from "axios";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useEffect, useState } from "react";
import store from "../../Store";

const Library = () => {
    const { id } = useParams();
    const theme = useTheme();
    const [flashcards, setFlashcards] = useState(null);
    const { stacks, loading, error } = useStoreState(state => state);
    const getStacks = useStoreActions(actions => actions.getStacks);

    useEffect(() => {
        getStacks();
    }, []); //[id]

    if(stacks.length > 0){
        return (
            <Box>
                <Grid container>
                    <Grid item style={{width: "21rem"}}>
                        {<StackBrowser/>}
                    </Grid>
                    <Grid item xs>
                        {<Header/>}
                        {<StackInspektor/>}
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default Library;