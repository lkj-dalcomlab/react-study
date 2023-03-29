import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import {AppBar, IconButton, Toolbar, useMediaQuery, useTheme} from "@mui/material";
import {styled} from "@mui/material/styles";
import {menuWidth} from "../config/config";

export default function HeaderLayout({menuOpen, onOpen}) {
    const theme = useTheme();
    const appBar = {
        color: 'inherit',
        elevation: 0,
        sx: {
            borderBottom: `1px solid ${theme.palette.divider}`
        }
    };
    const AppBarStyled = styled(AppBar) (() => ({
        ...(menuOpen && {
            marginLeft: menuWidth,
            width: `calc(100% - ${menuWidth}px)`
        })
    }))

    const header = (
        <Toolbar>
            <IconButton color="default" aria-label="open drawer" edge="start"
                        sx={{
                            color: 'text.primary',
                            bgcolor: 'grey.200'
                        }}
                        onClick={onOpen}>
                {!menuOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </IconButton>
        </Toolbar>
    );
    const menuCutLine = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <>
            {menuCutLine ?
                (<AppBarStyled {...appBar}>
                    {header}
                </AppBarStyled>)
                :
                (<AppBar {...appBar}>
                    {header}
                </AppBar>)
            }
        </>
    )
}