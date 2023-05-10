import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider, useSelector} from "react-redux"
import store from "./reducer/store";
import MainRouter from "./route";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import iconButton from "./theme/component/iconButton";
import typography from "./theme/component/typography"
import Typography from "./theme/Typography"
import {merge} from "lodash";
import Palette from "./theme/Palette";
import {CssBaseline} from "@mui/material";

export default function App() {
    //TODO: console.log("App rendering");
    const {mode} = useSelector(state => state.themeMode);
    const paletteTheme = Palette({mode: mode});
    const theme = createTheme({typography: Typography, palette: paletteTheme.palette });
    theme.components = merge(iconButton(theme), typography());

    return (
        <BrowserRouter basename="/">
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <MainRouter/>
            </ThemeProvider>
        </BrowserRouter>
    )
}