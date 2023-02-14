import { Box, Grid, Typography } from "@mui/material";
import { useStoreActions, useStoreState } from "easy-peasy";
import ContentEditable from 'react-contenteditable';
import { useNavigate, useParams } from "react-router-dom";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { useEffect } from "react";

const cleanText = (text) => {
    text = text.replaceAll("<div>", "").replaceAll("</div>", " ").replaceAll("<br>", "");
    text = text.slice(0, 23);
    console.log(text);
    return (text);
}


const StackInspektor = () => {
    const { id } = useParams();
    const stacks = useStoreState((state) => state.stacks);
    const cards = useStoreState((state) => state.cards);
    const getCards = useStoreActions(actions => actions.getCards);

    useEffect(() => {
        getCards({ _id: stacks[id-1]._id});
    }, [id]); //[id]

    let navigate = useNavigate(); 
    const routeChange = (route) =>{ 
        let path = `/${route}/${id}`;
        navigate(path);
    }

    return (
        <Box>
            <Grid container>
                <Grid item xs={6}>
                    <Box onClick={() => routeChange("learn")} sx={{ boxShadow: 4 }} height="3rem" borderRadius="0.6rem" mx="1.5rem" mt="1.5rem" py="0.01rem" px="2rem" display="flex" alignItems="center" justifyContent="center">
                        <Box display="flex" alignItems="center">
                            <SchoolOutlinedIcon sx={{ color:"#909090"}}/>
                            <Typography variant="h5" fontWeight="625" color="#909090" ml="0.5rem">Practice</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box onClick={() => routeChange("create")} sx={{ boxShadow: 4 }} height="3rem" borderRadius="0.6rem" mx="1.5rem" mt="1.5rem" py="0.01rem" px="2rem" display="flex" alignItems="center" justifyContent="center">
                        <Box display="flex" alignItems="center">
                            <AddCircleOutlineIcon sx={{ color:"#909090"}}/>
                            <Typography variant="h5" fontWeight="625" color="#909090" ml="0.5rem">Create Flashcards</Typography>
                        </Box>
                    </Box>
                </Grid>
                {cards && cards.map((card, i) => (
                    <Grid key={i} item xs={12} md={6} lg={4}>
                        <Box sx={{ boxShadow: 4 }} borderRadius="0.6rem" mx="1.5rem" my="1.5rem" py="2.5rem" textAlign="center">
                            <Typography variant="h4" mx="1.2rem" fontWeight="500" color="#000"><ContentEditable html={cleanText(card.front)} disabled={true}/></Typography>
                            <Box height="0.12rem" my="1.5rem" mx="5rem" backgroundColor="#adadad"></Box>
                            <Typography variant="h4" mx="1.2rem" fontWeight="500" color="#000"><ContentEditable html={cleanText(card.back)} disabled={true}/></Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
 
export default StackInspektor;