import { Box } from "@mui/system";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Typography } from "@mui/material";

const FeedBackButton = () => {
    return (
        <Box display="flex" justifyContent="center" my="1rem">
            <Box width="10vw" minWidth="16rem" display="flex" alignItems="space-between">
                <Box sx={{ boxShadow: 8 }} mr="1rem" backgroundColor="#e65a6c" borderRadius="0.6rem" height="4rem" width="4rem" display="flex" alignItems="center" justifyContent="center">
                    <KeyboardArrowLeftIcon style={{fill: "#fff"}}/>
                </Box>
                <Box sx={{ boxShadow: 8 }} mr="1rem" flexDirection="column" backgroundColor="#FADA5E" borderRadius="0.6rem" height="4rem" width="6rem" display="flex" alignItems="center" justifyContent="center">
                    <KeyboardArrowUpIcon style={{fill: "#fff"}}/>
                </Box>
                <Box sx={{ boxShadow: 8 }} backgroundColor="#50C878" borderRadius="0.6rem" height="4rem" width="4rem" display="flex" alignItems="center" justifyContent="center">
                    <KeyboardArrowRightIcon style={{fill: "#fff"}}/>
                </Box>
            </Box>
        </Box>
    );
}
 
export default FeedBackButton;