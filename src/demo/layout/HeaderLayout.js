import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import {AppBar, Grid, IconButton, Toolbar, useMediaQuery, useTheme} from "@mui/material";
import {styled} from "@mui/material/styles";
import {menuWidth} from "../config/config";
import SelectLayout from "./combobox/SelectLayout";
import {useCallback, useEffect, useMemo} from "react";

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
    }));

    const header = (
        <Toolbar>
            <Grid container justifyContent="space-between" alignItems="center" margin="10px 0">
                <IconButton color="default" aria-label="open drawer" edge="start"
                            sx={{
                                color: 'text.primary',
                                bgcolor: 'grey.200'
                            }}
                            onClick={onOpen}>
                    {!menuOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </IconButton>
                <SelectLayout/>
            </Grid>
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