import { useTheme } from "@emotion/react";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";


const CardOptions = (props) => {
    const theme = useTheme();

    return (
        <Box height="100vh" width="21rem" borderLeft="0.06rem solid #adadad">
            <Box height="4.5rem" py="0.5rem" display="flex" alignItems="center" justifyContent="center" borderBottom="0.06rem solid #adadad">
                <Typography variant="h2" fontSize="1.1rem" fontWeight="600" color="black">Card Options</Typography>
            </Box>
            <Box display="flex" justifyContent="center">
                <Box mt="2rem" display="flex" alignItems="center" flexDirection="row">
                    <Typography mr="1rem" variant="h4">Type:</Typography>
                    <Box>
                        <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={props.CardType}
                            onChange={(params) =>  props.setCardType(params.target.value)}
                        >
                            <MenuItem value={"n"}>Normal</MenuItem>
                            <MenuItem value={"m"}>Multiple Choice</MenuItem>
                        </Select>
                        </FormControl>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
 
export default CardOptions;