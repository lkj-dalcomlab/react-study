import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux"
import store from "./reducer/store";
import MainRouter from "./route";
import {createTheme, ThemeProvider} from "@mui/material";
import iconButton from "./theme/iconButton";

export default function App() {
    //TODO: console.log("App rendering");
    const theme = createTheme();
    theme.components = iconButton(theme);


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