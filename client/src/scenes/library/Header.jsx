import { Box, Typography } from "@mui/material";

const Header = ({ title, cards}) => {
    return (
        <Box>
            <Box
                height="4.5rem"
                borderBottom="0.06rem solid #adadad"
                display="flex"
                justifyContent="space-between"
            >
                <Box display="flex" alignItems="center">
                    <Box backgroundColor="#EE8989" height="1rem" width="1rem" borderRadius="1rem" ml="1.75rem" mr="0.8rem"></Box>
                    <Typography variant="h4" fontWeight="600" color="#000">{ title }</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <Typography
                        variant="h5"
                        fontWeight="625"
                        color="#909090"
                        mr="1.8rem"
                    >{ cards } Cards</Typography>
                </Box>
            </Box>
        </Box>
    );
}
 
export default Header;