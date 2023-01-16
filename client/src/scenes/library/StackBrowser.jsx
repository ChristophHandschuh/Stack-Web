import { Box, Grid, Typography, useTheme } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import ContentEditable from 'react-contenteditable'
import useFetch from "../../useFetch";

const Stack = ({ title, link, color, cards, cardsRight, cardsFalse }) => {
    let greenPercent = 100 - parseInt(cardsRight/cards * 100);
    let redPercent = parseInt(cardsFalse/cards * 100);

    return(
        <Link to={`/library/${link}`} style={{textDecoration: 'none'}}>
            <Box
                borderRadius="0.6rem"
                marginX="1.5rem"
                mb="2rem"
                pb="0.75rem"
                sx={{ boxShadow: 4 }}
            >
                <Box
                    backgroundColor={ color }
                    height="1rem"
                    borderRadius="0.6rem 0.6rem 0rem 0rem"
                    >
                </Box>
                <Box mt="0.75rem" mx="1rem">
                    <Box>
                        <Typography
                            variant="h5"
                            fontWeight="600"
                            color="#000000"
                        >{ title }</Typography>
                        <Typography
                            variant="h6"
                            fontWeight="625"
                            color="#909090"
                            mt="-5px"
                        >{ cards } Cards</Typography>
                    </Box>
                    <Box
                        mt="1rem"
                        height="0.65rem"
                        borderRadius="1rem"
                        sx={{
                            background: `linear-gradient(to right, #F69393, #F69393 ${ redPercent }%, #EFF693 ${ redPercent }%, #EFF693 ${ greenPercent }%, #93F6AF ${ greenPercent }%, #93F6AF);`,
                        }}
                    >
                    </Box>
                </Box>
            </Box>
        </Link>
    );
}

const StackBrowser = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <Box height="100vh" borderRight="0.06rem solid #adadad">
            <Box textAlign="center" py="1.75rem">
                <Typography variant="h2" fontSize="1.1rem" fontWeight="600" color={colors.grey[100]}>Card Browser</Typography>
            </Box>
            <Stack title="NW 1.Test" color="#EE8989" cards="26" cardsRight="10" cardsFalse="2" link="1"/>
            <Stack title="DIC 1.Test" color="#89C4EE" cards="10" cardsRight="5" cardsFalse="2" link="1"/>
            <Box marginX="1.5rem" sx={{ boxShadow: 4 }} height="2.75rem" borderRadius="0.6rem" display="flex" justifyContent="center" alignItems="center">
                <Box display="flex" alignItems="center">
                    <AddCircleOutlineIcon sx={{ color:"#909090"}}/>
                    <Typography variant="h5" fontWeight="625" color="#909090" ml="0.5rem">Add new Stack</Typography>
                </Box>
            </Box>
        </Box>
    );
}
 
export default StackBrowser;