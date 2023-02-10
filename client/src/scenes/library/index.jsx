import { Box, Grid, Typography, useTheme } from "@mui/material";
import StackBrowser from "./StackBrowser";
import Header from "../../components/Header";
import StackInspektor from "./StackInspektor";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useEffect } from "react";

const Library = () => {
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
                    <Grid item xs height="100vh">
                        {<Header/>}
                        {<StackInspektor/>}
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default Library;