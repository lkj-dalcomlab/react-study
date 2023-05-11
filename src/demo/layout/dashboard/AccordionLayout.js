import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ProcessLayout from "./process";
import PopupProcessSearch from "./process/PopupProcessSearch";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionLayout() {
    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="process-content"
                    id="process-header"
                >
                    <Typography>Data Grid</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ProcessLayout/>
                    </Typography>
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
                    <Typography>
                        <PopupProcessSearch/>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}