import { Box, Typography } from "@mui/material";
import { useStoreActions } from "easy-peasy";
import { useParams } from "react-router-dom";

const CardFinishButton = (props) => {
    const newCard = useStoreActions(actions => actions.newCard);
    const { id } = useParams();

    return(
        <Box width="100%" display="flex" flexDirection="column" alignItems="center">
            <Box onClick={() => newCard({CardData: props.CardData, id: id})} display="flex" sx={{'&:hover': {backgroundColor: "#D9D9D9"}}} alignItems="center" justifyContent="center" width="30rem" mb="3rem" mt="5rem" height="2.5rem" border="1px solid black" borderRadius="0.6rem">
                <Typography variant="h5" color="black">Finish</Typography>
            </Box>
        </Box>
    )
}
 
export default CardFinishButton;