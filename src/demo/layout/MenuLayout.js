import {Drawer, useMediaQuery} from "@mui/material";
import MenuHeader from "./menu/MenuHeader";
import MenuContents from "./menu/MenuContents";
import {useTheme} from "@mui/material/styles";
import {menuWidth} from "../config/config";
import {useMemo} from "react";
import MiniDrawerStyled from "./MiniDrawerStyled";

export default function MenuLayout({menuOpen, onOpen}) {
    //TODO: console.log("menuLayout rendering");

    const theme = useTheme();
    const menuCutLine = useMediaQuery(theme.breakpoints.up('lg'));


    // const menuDraw = useMemo(()=> (menuOpen), [menuOpen]);
    const menuHeader = useMemo(()=> (<MenuHeader menuOpen={menuOpen}/>), [menuOpen]);
    const menuContents = useMemo(()=> (<MenuContents/>), []);

    return (
        <>
        {menuCutLine ?
                (<MiniDrawerStyled variant="permanent" open={menuOpen}>
                    {menuHeader}
                    {menuContents}
                </MiniDrawerStyled>)
                :
                (<Drawer
                    variant="temporary"
                    open={menuOpen}
                    onClose={(e)=>{onOpen()}}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: menuWidth,
                            borderRight: `1px solid ${theme.palette.divider}`,
                            backgroundImage: 'none',
                            boxShadow: 'inherit'
                        }
                    }}
                >
                    {menuHeader}
                    {menuContents}
                </Drawer>)
        }
        </>
    )
}