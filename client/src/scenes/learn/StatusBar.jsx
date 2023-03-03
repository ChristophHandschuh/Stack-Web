import { Box, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate, useParams } from "react-router-dom";

const StatusBar = () => {
    const { id } = useParams();
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/library/${id}`;
        navigate(path);
    }

    return (
        <Box width="100%" height="3rem" display="flex" alignItems="center" borderBottom="1px solid #d2d8e1">
            <Box onClick={() => routeChange()} width="4rem" height="2rem" pl="2rem" display="flex" alignItems="center" justifyContent="center">
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
            <Box width="4rem" display="flex" alignItems="center">
                <Typography variant="h6" fontWeight="bold">28/65</Typography>
            </Box>
        </Box>
    );
}
 
export default StatusBar;