import {useDispatch, useSelector} from "react-redux";
import {menuSwitch} from "../reducer/menuActor";
import HeaderLayout from "./HeaderLayout";
import MenuLayout from "./MenuLayout";
import {Box, Toolbar} from "@mui/material";
import {Outlet} from "react-router-dom";

export default function MainLayout() {
    const {menuOpen} = useSelector(state => state.menuActor);

    const dispatch = useDispatch();
    const onOpen = ()=> dispatch(menuSwitch());

    return (
        <Box sx={{ display: "flex", width: "100%"} }>
            <HeaderLayout menuOpen={menuOpen} onOpen={onOpen}/>
            <MenuLayout menuOpen={menuOpen} onOpen={onOpen}/>
            <Box component="main" sx={{ width: "100%", flexGrow: 1, p: { xs: 2, sm: 3} }}>
                <Toolbar/>
                <Outlet/>
            </Box>
        </Box>
    )
}