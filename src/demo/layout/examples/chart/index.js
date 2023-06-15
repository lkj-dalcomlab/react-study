import {Box} from "@mui/material";
import RealTimeLineChart from "./RealTimeLineChart";
import {AreaChart} from "./AreaChart";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {MENU, selectMenuItem} from "../../../reducer/menuActor";
import DonutChart from "./DonutChart";
import RadialBarChart from "./RadialBarChart";

export default function ChartMain() {
    const {selectMenuId} = useSelector(state => state.menuActor);
    const dispatch = useDispatch();
    useEffect(()=> {
        if (selectMenuId !== MENU.CHART_EXAMPLE) {
            dispatch(selectMenuItem({selectMenuId: MENU.CHART_EXAMPLE}));
        }
    });

    return (
        <>
            <Box>
                <p>RealTime LineChart</p>
                {/*<RealTimeLineChart/>*/}
            </Box>
            <Box>
                <p>AreaChart</p>
                <AreaChart/>
            </Box>
            <Box>
                <p>DonutChart</p>
                <DonutChart/>
            </Box>
            <Box>
                <p>RadialBarChart</p>
                <RadialBarChart/>
            </Box>
        </>
    )
}