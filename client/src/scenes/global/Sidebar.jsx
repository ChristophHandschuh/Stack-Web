import { Box, Typography, useTheme } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import "react-pro-sidebar/dist/css/styles.css";
import { ReactComponent as Cube } from "../../assets/layers.svg";
import { Link, useLocation } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import FilterNoneIcon from '@mui/icons-material/FilterNone';

const Item = ({ title, icon, to }) => {
    const theme = useTheme();

    return(
        <Box textAlign="center" my="25px">
            <MenuItem
                style={{ color: "grey" }} 
                icon={ icon }
            >
                <Link to={to}/>
            </MenuItem>
            {/* <Typography variant="h6" mb="15px" color={colors.grey[600]}>{ title }</Typography> */}
        </Box>
    );
}


const Sidebar = () => {
    let location  = useLocation();

    if(location.pathname.substring(0,6) != "/learn")
    {
        return (
            <Box height="100vh" width="6rem" borderRight="0.06rem solid" borderRightColor="primary.main" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" pb="1rem" pt="1.5rem">
                <Box>
                    <Cube sx={{ color: "#827b7b" }} width={35} height={35}/>
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
}
 
export default Sidebar;