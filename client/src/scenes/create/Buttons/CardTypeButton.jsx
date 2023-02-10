import { Box, Typography } from "@mui/material";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";

const CardTypeButton = (props) => {     
    return(
        <Box width="100%" display="flex" flexDirection="column" alignItems="center">
                <Box display="flex" width="30rem" mb="3rem" mt="5rem" height="2.5rem" border="1px solid black" borderRadius="0.6rem">
                    <Box onClick={() => props.setCardType("n")} style={{backgroundColor: props.CardType=="n" && "#D9D9D9" }} borderRight="1px solid black" display="flex" alignItems="center" justifyContent="center" borderRadius="0.6rem 0 0 0.6rem" width="25%">
                        <Typography variant="h6"  color="black">Normal</Typography>
                    </Box>
                    <Box onClick={() => props.setCardType("mc")} style={{backgroundColor: props.CardType=="mc" && "#D9D9D9" }} borderRight="1px solid black" display="flex" alignItems="center" justifyContent="center" width="25%">
                        <Typography variant="h6"  color="black">Multiple Choice</Typography>
                    </Box>
                    <Box onClick={() => props.setCardType("fb")} style={{backgroundColor: props.CardType=="fb" && "#D9D9D9" }} borderRight="1px solid black" display="flex" alignItems="center" justifyContent="center" width="25%">
                        <Typography variant="h6"  color="black">Fill the blank</Typography>
                    </Box>                    
                    <Box onClick={() => props.setCardType("i")} style={{backgroundColor: props.CardType=="i" && "#D9D9D9" }} display="flex" alignItems="center" justifyContent="center" borderRadius="0 0.6rem 0.6rem 0" width="25%">
                        <Typography variant="h6"  color="black">Image</Typography>
                    </Box>                     
                </Box>
        </Box>
    )
}

export default CardTypeButton;