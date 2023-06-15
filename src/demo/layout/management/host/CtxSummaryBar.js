import {styled} from "@mui/material/styles";
import LinearProgress, {linearProgressClasses} from "@mui/material/LinearProgress";
import {Box, Grid, Typography} from "@mui/material";
import {LinearProgressProps} from "@mui/material/LinearProgress";


export default function CtxSummaryBar({rate, color}) {
    let textColor = color;
    if (color === 'warning') {// mui 버그로 인한 분기문 https://github.com/mui/material-ui/issues/29564
        textColor = 'warning.main';
    }
    function LinearProgressWithLabel(props) {
        return (
            <Grid container alignItems='center'>
                <Grid item xs={3} sx={{ minWidth: 35, mr: '10px'}}>
                    <Typography variant="summaryRate" color={textColor}>{`${Math.round(
                        props.value,
                    )}%`}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <LinearProgress variant="determinate" {...props} />
                </Grid>
            </Grid>
        );
    }

    return (
        <LinearProgressWithLabel variant="determinate" value={rate} color={color}/>
    )
}