import { Box, Typography } from "@mui/material";

const StackInspektor = () => {
    return (
        <Box sx={{ boxShadow: 4 }} borderRadius="0.6rem" mx="1.5rem" my="1.5rem" py="2.5rem" px="5rem" textAlign="center">
            <Typography variant="h4" mx="1.2rem" fontWeight="500" color="#000">Definition Lichtgschwindigkeit</Typography>
            <Box height="0.1rem" my="1.5rem" backgroundColor="#adadad"></Box>
            <Typography variant="h4" mx="1.2rem" fontWeight="500" color="#000">Die Lichtgeschwindigkeit c ist eine fundamentale Naturkonstante. Mit dieser Geschwindigkeit breiten sich Licht und andere elektromagnetischen Wellen im Vakuum aus sowie auch Gravitationswellen. Sie spielt eine zentrale Rolle in der speziellen und allgemeinen Relativitätstheorie.</Typography>
        </Box>
    );
}
 
export default StackInspektor;