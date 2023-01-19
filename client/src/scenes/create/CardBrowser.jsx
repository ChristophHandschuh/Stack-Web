import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { tokens } from "../../theme";

const Card = ({type, content}) => {
    if(type === "normal")
    {
        return (
            <Box sx={{ boxShadow: 4 }} borderRadius="0.6rem" mx="1.5rem" my="1.5rem" py="2rem" px="3rem" textAlign="center">
                    <Typography variant="h4" mx="1.2rem" fontWeight="500" color="#000">Front</Typography>
                    <Box height="0.12rem" my="1rem" backgroundColor="#adadad"></Box>
                    <Typography variant="h4" mx="1.2rem" fontWeight="500" color="#000">Back</Typography>
            </Box>
        );
    }
}

const CardBrowser = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box height="100vh" borderLeft="0.06rem solid #adadad">
            <Box height="3.5rem" py="0.5rem" display="flex" alignItems="center" justifyContent="center">   {/* height="4.5rem" */}
                <Typography variant="h2" fontSize="1.1rem" fontWeight="600" color={colors.grey[100]}>Card Browser</Typography>
            </Box>

            <Card type="normal"/>
        </Box>
    );
}
 
export default CardBrowser;