import {Box} from "@mui/material";
import RealTimeLineChart from "./RealTimeLineChart";
import {AreaChart} from "./AreaChart";

export default function ChartMain() {
    return (
        <>
            <Box>
                <p>RealTime LineChart</p>
                <RealTimeLineChart/>
            </Box>
            <Box>
                <p>AreaChart</p>
                <AreaChart/>
            </Box>
        </>
    )
}