import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";


const CardBrowser = () => {
    const theme = useTheme();

    return (
        <Box height="100vh" width="21rem" borderLeft="0.06rem solid #adadad">
            <Box height="4.5rem" py="0.5rem" display="flex" alignItems="center" justifyContent="center" borderBottom="0.06rem solid #adadad">
                <Typography variant="h2" fontSize="1.1rem" fontWeight="600" color="black">Card Options</Typography>
            </Box>
        </Box>
    );
}
 
export default CardBrowser;