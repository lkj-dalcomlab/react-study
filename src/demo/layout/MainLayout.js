import {useDispatch, useSelector} from "react-redux";
import {menuSwitch} from "../reducer/menuActor";
import HeaderLayout from "./HeaderLayout";
import MenuLayout from "./MenuLayout";
import {Box, Toolbar, useMediaQuery, useTheme} from "@mui/material";
import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import BreadCrumb from "./navigation/BreadCrumb";

export default function MainLayout() {
    //TODO: console.log("MainLayout rendering");
    const {menuOpen} = useSelector(state => state.menuActor);
    const [open, setOpen] = useState(menuOpen);

    const dispatch = useDispatch();
    const onOpen = ()=> {
        setOpen(!open);
        dispatch(menuSwitch(!open));
    };

    const theme = useTheme();
    const menuAutoOpen = useMediaQuery(theme.breakpoints.up('xl'));
    useEffect(()=> {
        setOpen(menuAutoOpen);
        dispatch(menuSwitch(menuAutoOpen));
    },[menuAutoOpen, dispatch]);

    return (
        <Box sx={{ display: "flex", width: "100%"} }>
            <HeaderLayout menuOpen={open} onOpen={onOpen}/>
            <MenuLayout menuOpen={open} onOpen={onOpen}/>
            <Box component="main" sx={{ width: "100%", pt: { xs: 7}, pl: { xs: 3 }}}>
                <Toolbar/>
                <BreadCrumb/>
                <Outlet/>
            </Box>
        </Box>
    )
}