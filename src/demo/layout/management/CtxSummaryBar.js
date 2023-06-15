import {styled} from "@mui/material/styles";
import LinearProgress, {linearProgressClasses} from "@mui/material/LinearProgress";
import {Box, Typography} from "@mui/material";
import {LinearProgressProps} from "@mui/material/LinearProgress";


export default function CtxSummaryBar({rate, color}) {
    let textColor = color;
    if (color === 'warning') {// mui 버그로 인한 분기문 https://github.com/mui/material-ui/issues/29564
        textColor = 'warning.main';
    }
    function LinearProgressWithLabel(props: LinearProgressProps) {
        return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ minWidth: 35}}>
                    <Typography variant="summaryRate" color={textColor}>{`${Math.round(
                        props.value,
                    )}%`}</Typography>
                </Box>
                <Box sx={{ width: '100%', ml: 1 }}>
                    <LinearProgress variant="determinate" {...props} />
                </Box>
            </Box>
        );
    }

    return (
        <LinearProgressWithLabel variant="determinate" value={rate} color={color}/>
    )
}