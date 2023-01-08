import { Box, Grid, Typography, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import { tokens } from "../../theme";
import useFetch from "../../useFetch";
import StackBrowser from "./StackBrowser";
import Header from "./Header";
import StackInspektor from "./StackInspektor";

const Library = () => {
    const { id } = useParams();
    const theme = useTheme();

    return (
        <Box>
            <Grid container>
                <Grid item style={{width: "21rem"}}>
                    <StackBrowser />
                </Grid>
                <Grid item xs>
                    <Header title="NW 1.Test" cards="26"/>
                    <StackInspektor />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Library;