import { Box, Typography } from "@mui/material";
import Flipcard from "../../components/Flipcard";
import AspectRatio from '@mui/joy/AspectRatio';
import Header from "../../components/Header";
import FeedBackButton from "./FeedBackButton";

const Learn = () => {
    return (
        <Box height="100vh">
            <Header />
            <Box display="flex" style={{height: "calc(100vh - 4.5rem)"}}>
                <Box width="100%">
                    <Box position="relative" top="-2rem" display="flex" alignItems="center" justifyContent="center" px="2rem" style={{height: "calc(100vh - 10.5rem)"}}>
                        <Box border="1px solid #adadad" display="flex" width="100%" maxWidth="60rem" alignItems="center" justifyContent="center" sx={{ boxShadow: 8 }} style={{aspectRatio: 16/9}} borderRadius="0.6rem" px="3rem">
                            <Typography variant="h4" mx="1.2rem" fontWeight="500" color="#000" >Jojo</Typography>
                        </Box>
                    </Box>
                    <FeedBackButton />
                </Box>
                <Box width="6rem"></Box>
            </Box>
        </Box>
    );
}
 
export default Learn;