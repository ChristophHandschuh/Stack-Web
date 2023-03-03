import { Box, Typography } from "@mui/material";
import Flipcard from "../../components/Flipcard";
import AspectRatio from '@mui/joy/AspectRatio';
import Header from "../../components/Header";
import FeedBackButton from "./FeedBackButton";
import StatusBar from "./StatusBar";
import { useParams } from "react-router-dom";
import { useStoreState } from "easy-peasy";

const Learn = () => {
    const { id } = useParams();
    const stacks = useStoreState((state) => state.stacks);
    const cards = useStoreState((state) => state.cards);

    console.log(id, stacks, cards);
    return (
        <Box>
            <StatusBar />
            <Box display="flex" alignItems="center" justifyContent="center" px="4rem" style={{height: "calc(100vh - 10rem)"}}>
                <Box border="1px solid #adadad" display="flex" width="100%" maxWidth="60rem" alignItems="center" justifyContent="center" sx={{ boxShadow: 8 }} style={{aspectRatio: 16/9}} borderRadius="0.6rem" px="3rem">
                    <Typography variant="h4" mx="1.2rem" fontWeight="500" color="#000" >Jojo</Typography>
                </Box>
            </Box>
            <FeedBackButton />
        </Box>
    );
}
 
export default Learn;