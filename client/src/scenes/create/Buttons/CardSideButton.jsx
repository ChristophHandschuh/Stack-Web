import { Box, Typography } from "@mui/material";

const CardSideButton = (props) => {

    const toggle = () => {
        props.setCardSide(!props.CardSide);
    }

    return (
        <Box width="100%" display="flex" flexDirection="column" alignItems="center">
            <Box display="flex" width="12rem" mt="5rem" mb="1rem" height="2.5rem" border="1px solid black" borderRadius="0.6rem">
                <Box onClick={toggle} borderRight="1px solid black" style={{backgroundColor: props.CardSide && "#D9D9D9" }} display="flex" alignItems="center" justifyContent="center" borderRadius="0.6rem 0 0 0.6rem" width="50%">
                    <Typography variant="h6" color="#000">Front</Typography>
                </Box>
                <Box onClick={toggle} display="flex" alignItems="center" style={{backgroundColor: !props.CardSide && "#D9D9D9" }} justifyContent="center" borderRadius="0 0.6rem 0.6rem 0" width="50%">
                    <Typography variant="h6" color="black">Back</Typography>
                </Box>                
            </Box>
        </Box>
    )
}

export default CardSideButton;