import {useEffect, useState} from "react";
import config from "../../../../config/config";
import {Accordion, Grid, Typography} from "@mui/material";
import ServletLayout from "./ServletLayout";
import MuiAccordionSummary, {AccordionSummaryProps,} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {styled} from "@mui/material/styles";
import FilterLayout from "./FilterLayout";
import ListenerLayout from "./ListenerLayout";

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
    const [filters, setFilters] = useState([]);
    const [listeners, setListeners] = useState([]);
    const loadContext = () => {
        console.log(ctx);
        fetch(config.serverAddr + "/context?path=" + ctx)
            .then(res => res.json())
            .then(res =>{
                console.log(res);
                setServlets(res.Servlets);
                setFilters(res.Filters);
                setListeners(res.Listeners);
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
                        aria-controls="servlet-content"
                        id="servlet-header"
                    >
                        <Typography variant="h5" sx={{pl: "10px"}}>Servlets</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{padding: "0px"}}>
                        <Grid sx={{overflow: "scroll"}}>
                            <ServletLayout servlets={servlets}/>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowForwardIosIcon/>}
                        aria-controls="filter-content"
                        id="filter-header"
                    >
                        <Typography variant="h5" sx={{pl: "10px"}}>Filters</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{padding: "0px"}}>
                        <Grid sx={{overflow: "scroll"}}>
                            <FilterLayout filters={filters}/>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowForwardIosIcon/>}
                        aria-controls="listener-content"
                        id="listener-header"
                    >
                        <Typography variant="h5" sx={{pl: "10px"}}>Listeners</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{padding: "0px"}}>
                        <Grid sx={{overflow: "scroll"}}>
                            <ListenerLayout listeners={listeners}/>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </>
    )
}