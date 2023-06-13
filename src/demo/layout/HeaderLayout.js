import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {AppBar, Grid, IconButton, Toolbar, useMediaQuery, useTheme} from "@mui/material";
import {styled} from "@mui/material/styles";
import {menuWidth} from "../config/config";
import SelectLayout from "./combobox/SelectLayout";
import {useDispatch, useSelector} from "react-redux";
import {changeMode} from "../reducer/themeMode";
import BreadCrumb from "./navigation/BreadCrumb";

export default function HeaderLayout({menuOpen, onOpen}) {
    const {mode} = useSelector(state => state.themeMode);
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

    const dispatch = useDispatch();
    const changeDarkMode = () => {
        dispatch(changeMode('dark'));
    }
    const changeLightMode = () => {
        dispatch(changeMode('light'));
    }

    const header = (
        <Toolbar>
            <Grid container sx={{
                justifyContent:"space-between", alignItems:"center", margin:"10px 0", height:"60px", pl:"10px"
            }}>
                <Grid sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                    <IconButton aria-label="open drawer" edge="start" onClick={onOpen}
                                sx={{ marginRight: "20px",
                                    border: `1px solid ${theme.palette.secondary.main}`
                                }}
                    >
                        {!menuOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </IconButton>
                    {/*<BreadCrumb/>*/}
                </Grid>
                <Grid sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                    {mode === 'dark' ? <IconButton onClick={changeLightMode}><LightModeIcon/></IconButton> :
                        <IconButton onClick={changeDarkMode}><DarkModeIcon/></IconButton>}
                    <SelectLayout/>
                </Grid>
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