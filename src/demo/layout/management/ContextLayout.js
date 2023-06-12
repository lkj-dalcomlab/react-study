import {useEffect, useState} from "react";
import config from "../../config/config";
import {Accordion, Grid, Typography} from "@mui/material";
import ServletLayout from "./ServletLayout";
import MuiAccordionSummary, {AccordionSummaryProps,} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {styled} from "@mui/material/styles";

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
export default function ContextLayout({ctx}) {
    const [servlets, setServlets] = useState([]);
    const loadContext = () => {
        console.log(ctx);
        fetch(config.serverAddr + "/context?path=" + ctx)
            .then(res => res.json())
            .then(res =>{
                console.log(res.servlets);
                setServlets(res.servlets);
            }, (error) => {
                console.log(error);
            });
    }
    useEffect(loadContext, [ctx]);
    return (
        <>
            <Grid sx={{pr: "20px"}}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowForwardIosIcon/>}
                        aria-controls="process-content"
                        id="process-header"
                    >
                        <Typography variant="h5" sx={{pl: "10px"}}>Servlets</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{padding: "0px"}}>
                        <Grid sx={{overflow: "scroll"}}>
                            <ServletLayout servlets={servlets}/>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </>
    )
}