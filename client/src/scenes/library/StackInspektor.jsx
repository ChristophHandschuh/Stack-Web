import { Box, Typography } from "@mui/material";
import { useStoreActions, useStoreState } from "easy-peasy";
import ContentEditable from 'react-contenteditable';
import { useNavigate, useParams } from "react-router-dom";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const StackInspektor = () => {
    const { id } = useParams();
    const stacks = useStoreState((state) => state.stacks);
    const changeCardContent = useStoreActions(actions => actions.changeCardContent);
    const flashcards = stacks[id-1].flashcards;

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/create/${id}`;
        navigate(path);
    }

    return (
        <Box>
            <Box onClick={routeChange} sx={{ boxShadow: 4 }} height="3rem" borderRadius="0.6rem" mx="1.5rem" my="1.5rem" py="0.01rem" px="5rem" display="flex" alignItems="center" justifyContent="center">
                <Box display="flex" alignItems="center">
                    <AddCircleOutlineIcon sx={{ color:"#909090"}}/>
                    <Typography variant="h5" fontWeight="625" color="#909090" ml="0.5rem">Create new Flashcards</Typography>
                </Box>
            </Box>

            {flashcards.map((flashcard, i) => (
                <Box key={i} sx={{ boxShadow: 4 }} borderRadius="0.6rem" mx="1.5rem" my="1.5rem" py="2.5rem" px="5rem" textAlign="center">
                    <Typography variant="h4" mx="1.2rem" fontWeight="500" color="#000"><ContentEditable html={flashcard.front} onChange={(e) => changeCardContent({front: e.target.value, stack_id:id, card_id: i})}/></Typography>
                    <Box height="0.12rem" my="1.5rem" backgroundColor="#adadad"></Box>
                    <Typography variant="h4" mx="1.2rem" fontWeight="500" color="#000"><ContentEditable html={flashcard.back} onChange={(e) => changeCardContent({back: e.target.value, stack_id:id,  card_id: i})}/></Typography>
                </Box>
            ))}
        </Box>
    );
}
 
export default StackInspektor;