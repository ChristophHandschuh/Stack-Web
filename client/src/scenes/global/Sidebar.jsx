import { Box, Typography, useTheme } from "@mui/material";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import FilterNoneIcon from '@mui/icons-material/FilterNone';

const Item = ({ title, icon, to }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <Box textAlign="center" my="25px">
            <MenuItem
                style={{ color: colors.grey[100] }} 
                icon={ icon }
            >
                <Link to={to}/>
            </MenuItem>
            {/* <Typography variant="h6" mb="15px" color={colors.grey[600]}>{ title }</Typography> */}
        </Box>
    );
}


const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box height="100vh" width="6rem" borderRight="0.06rem solid #adadad" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" pb="1rem" pt="1.5rem">
            <Box>
                <FilterNoneIcon sx={{ color: "#827b7b" }} fontSize="large"/>
            </Box>
            <Box display="flex" flexDirection="column" mt="-6rem">
                <Link to="/">
                    <Box width="3rem" height="3rem" display="flex" alignItems="center" justifyContent="center" borderRadius="0.5rem" sx={{ '&:hover': {background: "#ECECEC"}}}>
                        <HomeOutlinedIcon sx={{ color: "#827b7b" }} fontSize="large"/>
                    </Box>
                </Link>
                <Link to="/library/1">
                    <Box width="3rem" height="3rem" display="flex" alignItems="center" justifyContent="center" borderRadius="0.5rem" sx={{ '&:hover': {background: "#ECECEC"}}} my="1rem">
                        <LocalLibraryOutlinedIcon sx={{ color: "#827b7b" }} fontSize="large"/>
                    </Box>
                </Link>
                <Link to="/create">
                    <Box width="3rem" height="3rem" display="flex" alignItems="center" justifyContent="center" borderRadius="0.5rem" sx={{ '&:hover': {background: "#ECECEC"}}}>
                        <NoteAddOutlinedIcon sx={{ color: "#827b7b" }} fontSize="large"/>
                    </Box>
                </Link>
            </Box>
            <Box>
                <LogoutIcon sx={{ color: "#827b7b" }} fontSize="large"/>
            </Box>
        </Box>
    );
}
 
export default Sidebar;