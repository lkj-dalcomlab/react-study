import {useState} from "react";
import config from "../../config/config";
import {Accordion, AccordionDetails, AccordionSummary, Grid, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProcessLayout from "../dashboard/process";
import PopupProcessSearch from "../dashboard/process/PopupProcessSearch";

export default function ContextLayout({ctx}) {
    console.log(ctx);
    const [servlets, setServlets] = useState([]);
    const loadContext = () => {
        fetch(config.serverAddr + "/context?path=" + {ctx})
            .then(res => res.json())
            .then(res =>{
                setServlets(res.servlets);
            }, (error) => {
                console.log(error);
            });
    }
    return (
        <>
            {ctx}
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
                            
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </>
    )
}