import { Box, Grid, Typography } from "@mui/material";
import { useStoreActions, useStoreState } from "easy-peasy";
import ContentEditable from 'react-contenteditable';
import { useNavigate, useParams } from "react-router-dom";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

const StackInspektor = () => {
    const { id } = useParams();
    const stacks = useStoreState((state) => state.stacks);
    const changeCardContent = useStoreActions(actions => actions.changeCardContent);
    const cards = stacks[id-1].cards;

    console.log(cards);

    let navigate = useNavigate(); 
    const routeChange = (route) =>{ 
        let path = `/${route}/${id}`;
        navigate(path);
    }

    return (
        <Box>
            {/* <Box onClick={routeChange} sx={{ boxShadow: 4 }} height="3rem" borderRadius="0.6rem" py="0.01rem" px="5rem" display="flex" alignItems="center" justifyContent="center">
                <Box display="flex" alignItems="center">
                    <AddCircleOutlineIcon sx={{ color:"#909090"}}/>
                    <Typography variant="h5" fontWeight="625" color="#909090" ml="0.5rem">Create new Flashcards</Typography>
                </Box>
            </Box> */}

            <Grid container>
                <Grid item xs={6}>
                    <Box onClick={() => routeChange("learn")} sx={{ boxShadow: 4 }} height="3rem" borderRadius="0.6rem" mx="1.5rem" mt="1.5rem" py="0.01rem" px="2rem" display="flex" alignItems="center" justifyContent="center">
                        <Box display="flex" alignItems="center">
                            <SchoolOutlinedIcon sx={{ color:"#909090"}}/>
                            <Typography variant="h5" fontWeight="625" color="#909090" ml="0.5rem">Practise</Typography>
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
                {cards.map((card, i) => (
                    <Grid key={i} item xs={6} md={6}>
                        <Box sx={{ boxShadow: 4 }} borderRadius="0.6rem" mx="1.5rem" my="1.5rem" py="2.5rem" textAlign="center">
                            <Typography variant="h4" mx="1.2rem" fontWeight="500" color="#000"><ContentEditable html={card.front} onChange={(e) => changeCardContent({front: e.target.value, stack_id:id, card_id: i})}/></Typography>
                            <Box height="0.12rem" my="1.5rem" mx="5rem" backgroundColor="#adadad"></Box>
                            <Typography variant="h4" mx="1.2rem" fontWeight="500" color="#000"><ContentEditable html={card.back} onChange={(e) => changeCardContent({back: e.target.value, stack_id:id,  card_id: i})}/></Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
 
export default StackInspektor;