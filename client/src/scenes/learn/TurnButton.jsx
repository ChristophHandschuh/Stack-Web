import FlipToBackIcon from '@mui/icons-material/FlipToBack';
import { Box } from '@mui/material';

const TurnButton = (props) => {
    return (
        <Box display="flex" justifyContent="center" my="1rem">
            <Box onClick={() => props.setIsFlipped(true)} sx={{ boxShadow: 8, '&:hover': {border:"2px solid #000"}}} ml="1rem" borderRadius="0.6rem" height="4rem" width="14rem" display="flex" alignItems="center" justifyContent="center">
                <FlipToBackIcon style={{fontSize: 20}}/>
            </Box>
        </Box>
    );
}
 
export default TurnButton;