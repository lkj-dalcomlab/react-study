import {Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography} from "@mui/material";
import ProcessLayout from "./process";
import PopupProcessSearch from "./process/PopupProcessSearch";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const xScroll = {
    // display: 'flex',
    // flexDirection: 'column',
    overflowX: 'auto',
}

const accordionData = [
    {
        title: "Data Grid",
        content: <ProcessLayout/>
    },
    {
        title: "Data Grid & Popup",
        content: <PopupProcessSearch/>
    }
]
export default function AccordionLayout() {
    return (
        <Grid sx={{pr: "20px"}}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="process-content"
                    id="process-header"
                >
                    <Typography>Data Grid</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid sx={{overflow: "scroll", pl: "10px", pr: "10px"}}>
                        <ProcessLayout/>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="popup-content"
                    id="popup-header"
                >
                    <Typography>Data Grid & Popup</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <PopupProcessSearch/>
                </AccordionDetails>
            </Accordion>
        </Grid>
    )
}