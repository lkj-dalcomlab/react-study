import {Card, CardContent, Grid, Typography, useTheme} from "@mui/material";
import CountViewRadialBar from "./CountViewRadialBar";

export default function ContextDashboard({servletCount, filterCount, listenerCount}) {
    const theme = useTheme();

    const total = servletCount + filterCount + listenerCount;
    const servletRate = Math.round((servletCount / total) * 100);
    const filterRate = Math.round((filterCount / total) * 100);
    const listenerRate = Math.round((listenerCount / total) * 100);

    const CountView = ({title, rate, count, color}) => {
        return (
            <Card>
                <CardContent sx={{'&:last-child': {paddingTop: '15px', paddingBottom: '0px'} }}>
                    <Typography variant="summaryRate">{title}</Typography>
                    <CountViewRadialBar rate={rate} count={count} color={color}/>
                </CardContent>
            </Card>
        )
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <CountView title="Servlets" rate={servletRate} count={servletCount} color={theme.palette.primary.light}/>
            </Grid>
            <Grid item xs={3}>
                <CountView title="Filters" rate={filterRate} count={filterCount} color={theme.palette.success.light}/>
            </Grid>
            <Grid item xs={3}>
                <CountView title="Listeners" rate={listenerRate} count={listenerCount} color={theme.palette.info.light}/>
            </Grid>
        </Grid>
    )
}