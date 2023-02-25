import { Box } from "@mui/system";
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';import { Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const FeedBackButton = () => {
    return (
        <Box display="flex" justifyContent="center" my="1rem">
            <Box display="flex" alignItems="space-between">
                <Box sx={{ boxShadow: 8, '&:hover': {border:"2px solid #e3021f"}}} backgroundColor="#fce3e6" mr="1rem" borderRadius="0.6rem" height="4rem" width="4rem" display="flex" alignItems="center" justifyContent="center">
                    <SentimentVeryDissatisfiedIcon fontSize="2rem" style={{fill: "#e3021f", fontSize: 20}}/>
                </Box>
                <Box sx={{ boxShadow: 8, '&:hover': {border:"2px solid #fac602"}}} flexDirection="column" backgroundColor="#fcf7e3" borderRadius="0.6rem" height="4rem" width="4rem" display="flex" alignItems="center" justifyContent="center">
                    <SentimentNeutralIcon style={{fill: "#fac602", fontSize: 20}}/>
                </Box>
                <Box sx={{ boxShadow: 8, '&:hover': {border:"2px solid #04c444"}}} ml="1rem" backgroundColor="#d7fae2" borderRadius="0.6rem" height="4rem" width="4rem" display="flex" alignItems="center" justifyContent="center">
                    <SentimentVerySatisfiedIcon style={{fill: "#04c444", fontSize: 20}}/>
                </Box>
            </Box>
        </Box>
    );
}
 
export default FeedBackButton;