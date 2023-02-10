import { Box, Typography } from "@mui/material";
import { useStoreState } from "easy-peasy";
import { useParams } from "react-router-dom";

const Header = () => {
    const { id } = useParams();
    const stacks = useStoreState((state) => state.stacks);
    const title = stacks[id-1].name;
    const color = stacks[id-1].color;
    const cards = stacks[id-1].cards.length;

    return (
        <Box>
            <Box
                height="4.5rem"
                borderBottom="0.06rem solid #adadad"
                display="flex"
                justifyContent="space-between"
            >
                <Box display="flex" alignItems="center">
                    <Box backgroundColor={ color } height="1rem" width="1rem" borderRadius="1rem" ml="1.75rem" mr="0.8rem"></Box>
                    <Typography variant="h4" fontWeight="600" color="#000">{ title.replace("<br>", '') }</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <Typography
                        variant="h5"
                        fontWeight="625"
                        color="#000"
                        mr="1.8rem"
                    >{ cards } Cards</Typography>
                </Box>
            </Box>
        </Box>
    );
}
 
export default Header;