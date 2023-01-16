import { Box, Typography } from "@mui/material";
import { useStoreState } from "easy-peasy";
import ContentEditable from 'react-contenteditable';
import { useParams } from "react-router-dom";

const StackInspektor = () => {
    const { id } = useParams();
    const stacks = useStoreState((state) => state.stacks);
    const flashcards = stacks[id-1].flashcards;

    return (
        <Box>
            {flashcards.map((flashcard, i) => (
                <Box key={i} sx={{ boxShadow: 4 }} borderRadius="0.6rem" mx="1.5rem" my="1.5rem" py="2.5rem" px="5rem" textAlign="center">
                    <Typography suppressContentEditableWarning={true} contentEditable="true" variant="h4" mx="1.2rem" fontWeight="500" color="#000">{ flashcard.front }</Typography>
                    <Box height="0.12rem" my="1.5rem" backgroundColor="#adadad"></Box>
                    <Typography suppressContentEditableWarning={true} contentEditable="true" variant="h4" mx="1.2rem" fontWeight="500" color="#000">{ flashcard.back }</Typography>
                </Box>
            ))}
        </Box>
    );
}
 
export default StackInspektor;