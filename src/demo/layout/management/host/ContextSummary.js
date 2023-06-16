import {Card, CardContent, Grid, Typography, useTheme} from "@mui/material";
import CtxSummaryBar from "./CtxSummaryBar";
import {styled} from "@mui/material/styles";
import CtxTotalDonutChart from "./CtxTotalDonutChart";


const CardContentPadding = styled(CardContent)(`
    &:last-child {
        padding-bottom: 17px;
    }
`)
export default function ContextSummary({summary}) {
    const theme = useTheme();
    if (summary === undefined) {
        return (<></>)

    };

    const loadCount = summary.Load;
    const unloadCount = summary.Unload;
    const errorCount = summary.Error;
    const totalCount = summary.Total;

    const loadRate = Math.round((loadCount / totalCount) * 100);
    const unloadRate = Math.round((unloadCount / totalCount) * 100);
    const errorRate = Math.round((errorCount / totalCount) * 100);

    const Summary = ({title, count, rate, mainColor}) => {
        return (
            <Card>
                {/*<Grid container justifyContent="center" alignItems="center" sx={{height: '100%'}}>*/}
                    <CardContentPadding>
                        <Typography variant="summaryTitle" color={theme.palette.text.primary}>{title + ' [ ' + count + ' ]'}</Typography>
                        <CtxSummaryBar rate={rate} color={mainColor}/>
                    </CardContentPadding>
                {/*</Grid>*/}
            </Card>
        );
    };

    const TotalContexts = () => {
        return (
            <Card>
                <CardContent sx={{'&:last-child': {paddingTop: '5px', paddingBottom: '0px'} }}>
                    {/*<Typography color="secondary" sx={{textAlign: "center", lineHeight: 1.8}}>TOTAL CONTEXTS</Typography>*/}
                    {/*<Typography variant="summaryRate" sx={{display: "block", textAlign: "center"}}>{totalCount}</Typography>*/}
                    <CtxTotalDonutChart summary={summary}/>
                </CardContent>
            </Card>
        )
    }

    const RateGraph = ({rate}) => {

    };

    return (
        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="flex-end">
            <Grid item xs={2.4}>
                <TotalContexts/>
            </Grid>
            <Grid item xs={3.2}>
                <Summary title={"Load Summary"} count={loadCount} rate={loadRate} mainColor="primary"/>
            </Grid>
            <Grid item xs={3.2}>
                <Summary title={"Unload Summary"} count={unloadCount} rate={unloadRate} mainColor="warning"/>
            </Grid>
            <Grid item xs={3.2}>
                <Summary title={"Error Summary"} count={errorCount} rate={errorRate} mainColor="error"/>
            </Grid>
        </Grid>
    )
}