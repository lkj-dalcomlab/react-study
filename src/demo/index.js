import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux"
import store from "./reducer/store";
import MainRouter from "./route";
import {createTheme, ThemeProvider} from "@mui/material";
import iconButton from "./theme/component/iconButton";
import typography from "./theme/component/typography"
import Typography from "./theme/Typography"
import {merge} from "lodash";
import Palette from "./theme/Palette";

export default function App() {
    //TODO: console.log("App rendering");
    const paletteTheme = Palette();
    const theme = createTheme({typography: Typography, palette: paletteTheme.palette });
    theme.components = merge(iconButton(theme), typography());

    return (
        <Provider store={store}>
            <BrowserRouter basename="/">
                <ThemeProvider theme={theme}>
                    <MainRouter/>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>

    )
}