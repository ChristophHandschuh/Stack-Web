import { Box, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate, useParams } from "react-router-dom";
import { useStoreState } from "easy-peasy";

const StatusBar = () => {
    const { id } = useParams();
    const stacks = useStoreState((state) => state.stacks);
    const cards = stacks[id - 1].cards;
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/library/${id}`;
        navigate(path);
    }

    let sum = cards.length;
    let greenPercent = 100 - parseInt(cards.filter(item => item.status === "new").length/sum * 100);
    let redPercent = parseInt(cards.filter(item => item.status === "learned").length/sum * 100);


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
                    background: `linear-gradient(to right, #93F6AF, #93F6AF ${ redPercent }%, #EFF693 ${ redPercent }%, #EFF693 ${ greenPercent }%, #F69393 ${ greenPercent }%, #F69393);`,
                }}
            >
            </Box>
            <Box width="4rem" display="flex" alignItems="center">
                <Typography variant="h6" fontWeight="bold" fontSize="0.75rem">{redPercent}/{sum}</Typography>
            </Box>
        </Box>
    );
}
 
export default StatusBar;