//Main Branch
import { Box, Typography, useTheme } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from "react-router-dom";
import { tokens } from "../../theme";
import { useStoreActions, useStoreState } from "easy-peasy";
import ContentEditable from 'react-contenteditable';

const Stack = ({ title, id, color, cards, cardsRight, cardsFalse }) => {
    let greenPercent = 100 - parseInt(cardsRight/cards * 100);
    let redPercent = parseInt(cardsFalse/cards * 100);

    const changeStackName = useStoreActions(actions => actions.changeStackName);

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/library/${id}`;
      navigate(path);
    }

    return(
            <Box
                borderRadius="0.6rem"
                marginX="1.5rem"
                mb="2rem"
                pb="0.75rem"
                sx={{ boxShadow: 4 }}
                onClick={routeChange}
            >
                <Box
                    backgroundColor={ color }
                    height="1rem"
                    borderRadius="0.6rem 0.6rem 0rem 0rem"
                    >
                </Box>
                <Box mt="0.75rem" mx="1rem">
                    <Box width="10rem">
                        <Typography
                            variant="h5"
                            fontWeight="600"
                            color="#000000"
                        ><ContentEditable html={title} onChange={(e) => changeStackName({name: e.target.value, id:id})}/></Typography>
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
    );
}

const StackBrowser = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const stacks = useStoreState((state) => state.stacks);

    return (
        <Box height="100vh" borderRight="0.06rem solid #adadad">
            <Box textAlign="center" py="1.75rem">
                <Typography variant="h2" fontSize="1.1rem" fontWeight="600" color={colors.grey[100]}>Card Browser</Typography>
            </Box>

            {stacks.map((stack, i) => (
                <Stack key={i} title={stack.name} color={stack.color} cards={stack.flashcards.length} cardsRight={stack.cardsRight} cardsFalse={stack.cardsFalse} id={i + 1}/>
            ))}

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