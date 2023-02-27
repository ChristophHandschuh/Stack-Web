import { Box, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const StatusBar = () => {
    return (
        <Box width="100%" height="4rem" display="flex" alignItems="center" justifyContent="center" borderBottom="1px solid #d2d8e1">
            <Box width="2rem" ml="2rem" display="flex" alignItems="center" justifyContent="center">
                <ArrowBackIosIcon/>
            </Box>
            <Box
                height="0.65rem"
                width="100%"
                borderRadius="1rem"
                mx="2rem"
                sx={{
                    background: `linear-gradient(to right, #F69393, #F69393 50%, #EFF693 50%, #EFF693 20%, #93F6AF 20%, #93F6AF);`,
                }}
            >
            </Box>
            <Box width="4rem" display="flex" alignItems="center" jusitfyContent="center">
                <Typography variant="h6" fontWeight="bold">28/65</Typography>
            </Box>
        </Box>
    );
}
 
export default StatusBar;