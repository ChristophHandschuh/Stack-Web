import { Box, Grid } from "@mui/material";
import CardBrowser from "./CardBrowser";

const Create = () => {
    return (
        <Box>
            <Grid container>
                <Grid item xs>
                    {/* {<Header/>}
                    {<StackInspektor/>} */}
                </Grid>
                <Grid item style={{width: "21rem"}}>
                    {<CardBrowser/>}
                </Grid>
            </Grid>
        </Box>
    );
}
 
export default Create;