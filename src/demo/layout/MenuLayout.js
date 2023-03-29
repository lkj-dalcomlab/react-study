import {Drawer, useMediaQuery, useTheme} from "@mui/material";
import MenuHeader from "./menu/MenuHeader";
import MenuContents from "./menu/MenuContents";
import {styled} from "@mui/material/styles";
import {menuWidth} from "../config/config";
import {useMemo} from "react";

export default function MenuLayout({menuOpen, onOpen}) {
    const openMenu = (theme)=> ({
        width: menuWidth
    });
    const closeMenu = (theme)=> ({
        width: 0
    });
    const MiniDrawerStyled = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
        width: menuWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open &&
            {
                ...openMenu(theme),
                '& .MuiDrawer-paper': openMenu(theme)
            }
        ),
        ...(!open &&
            {
                ...closeMenu(theme),
                '& .MuiDrawer-paper': closeMenu(theme)
            })
    }));
    const theme = useTheme();
    const menuCutLine = useMediaQuery(theme.breakpoints.up('lg'));

    const menuHeader = useMemo(()=> (<MenuHeader/>), []);
    const menuContents = useMemo(()=> (<MenuContents/>), []);
    return (
        <>
        {menuCutLine ?
                (<MiniDrawerStyled variant="permanent" open={menuOpen}>
                    {menuHeader}
                    {menuContents}
                    {console.log('contain menu, ' + menuOpen)}
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