import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStoreActions } from "easy-peasy";
import ContentEditable from 'react-contenteditable';

const Stack = ({ title, id, color, cardsLearned, cardsLearning, cardsNew }) => {
    const changeStackName = useStoreActions(actions => actions.changeStackName);

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/library/${id}`;
      navigate(path);
    }

    let sum = cardsNew + cardsLearned + cardsLearning;
    if(cardsLearned !== 0 || cardsLearning !== 0 || cardsNew !== 0){
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
 
export default Stack;