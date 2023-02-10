//Main Branch
import { Box, Grid, Typography, useTheme } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
import ContentEditable from 'react-contenteditable';

const Stack = ({ title, id, color, cardsLearned, cardsLearning, cardsNew }) => {
    const changeStackName = useStoreActions(actions => actions.changeStackName);

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/library/${id}`;
      navigate(path);
    }

    let sum = cardsNew + cardsLearned + cardsLearning;
    if(cardsLearned != 0 || cardsLearning != 0 || cardsNew != 0){
        let greenPercent = 100 - parseInt(cardsLearned/sum * 100);
        let redPercent = parseInt(cardsNew/sum * 100);

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
                        >{ sum } Cards</Typography>
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
    }else{
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
                        >{ sum } Cards</Typography>
                    </Box>
                </Box>
            </Box>
        );
    }
}

const StackBrowser = () => {
    const stacks = useStoreState((state) => state.stacks);
    const newStack = useStoreActions(actions => actions.newStack);

    console.log(stacks);
    return (
        <Box height="100vh" borderRight="0.06rem solid #adadad">
            <Box height="4.5rem" py="0.5rem" display="flex" alignItems="center" justifyContent="center" borderBottom="0.06rem solid #adadad">   {/* height="4.5rem" */}
                <Typography variant="h2" fontSize="1.1rem" fontWeight="600" color="black">Card Browser</Typography>
            </Box>

            <Box onClick={newStack} mx="1.5rem" my="1.5rem" sx={{ boxShadow: 4 }} height="3rem" borderRadius="0.6rem" display="flex" justifyContent="center" alignItems="center">   {/* mx="1.5rem" */}
                <Box display="flex" alignItems="center">
                    <AddCircleOutlineIcon sx={{ color:"#909090"}}/>
                    <Typography variant="h5" fontWeight="625" color="#909090" ml="0.5rem">Add new Stack</Typography>
                </Box>
            </Box>
            {stacks && stacks.map((stack, i) => (
                <Stack key={i} title={stack.name} color={stack.color} cardsLearned={stack.cardsLearned} cardsLearning={stack.cardsLearning} cardsNew={stack.cardsNew} id={i + 1}/>
            ))}
        </Box>
    );
}
 
export default StackBrowser;