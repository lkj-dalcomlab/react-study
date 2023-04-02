// material-ui
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';

// project import
import {menuWidth} from "../config/config";

const openMenu = (theme)=> ({
    width: menuWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden',
    boxShadow: 'none'
});
const closeMenu = (theme)=> ({
    width: 0,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    borderRight: 'none'
});
const MiniDrawerStyled = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    width: menuWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
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

export default MiniDrawerStyled;
