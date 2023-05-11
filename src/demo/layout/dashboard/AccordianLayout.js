import {Box, Card, createTheme, Grid, Paper, ThemeProvider, useTheme} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useState} from "react";
import ProcessLayout from "./process";
import PopupProcessSearch from "./process/PopupProcessSearch";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 70,
    hover: 'cursor',
    lineHeight: '60px',
}));

export default function AccordianLayout() {
    const theme = useTheme();
    const [openDefault, setOpenDefault] = useState(false);
    const [openPopup, setOpenPopup] = useState(false);

    const defaultClick = () => {
        setOpenDefault(!openDefault);
    };

    const popupClick = () => {
        setOpenPopup(!openPopup);
    };

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item elevation={24} onClick={defaultClick}>Default</Item>
                    {openDefault &&
                        <Box>
                            <ProcessLayout/>
                        </Box>
                    }
                </Grid>
                <Grid item xs={12}>
                    <Item elevation={24} onClick={popupClick}>Popup</Item>
                    {openPopup &&
                        <Box>
                            <PopupProcessSearch/>
                        </Box>
                    }
                </Grid>
            </Grid>
        </>
    )
}