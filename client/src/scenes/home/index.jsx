import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Home = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box>
            <Typography
            variant = "h2"
                color={colors.grey[100]} 
            >Home</Typography>
        </Box>
    );
}
 
export default Home;