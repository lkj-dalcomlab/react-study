import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import {AppBar, IconButton, Toolbar, useTheme} from "@mui/material";

export default function HeaderLayout({menuOpen, onOpen}) {
    const iconBackColor = 'grey.100';
    const iconBackColorOpen = 'grey.200';

    const theme = useTheme();
    const appBar = {
        color: 'inherit',
        elevation: 10,
        sx: {
            borderBottom: `1px solid ${theme.palette.divider}`
            // boxShadow: theme.customShadows.z1
        }
    };

    const header = (
        <Toolbar>
            <IconButton color="default" aria-label="open drawer" edge="start"
                        sx={{
                            color: 'text.primary',
                            bgcolor: menuOpen ? iconBackColorOpen : iconBackColor,
                            ml: {xs: 0, lg: -2}
                        }}
                        onClick={onOpen}>
                {!menuOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </IconButton>
        </Toolbar>
    );

    return (
        <AppBar {...appBar}>
            {header}
        </AppBar>
    )
}