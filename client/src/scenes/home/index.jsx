import { Typography, Box, useTheme } from "@mui/material";
import { Navigate } from "react-router-dom";
import { tokens } from "../../theme";

const Home = ({ isLoggedIn }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // if (!isLoggedIn) {
    //     return <Navigate to="/login" replace />;
    // }

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