import {GroupOutlined, LineChartOutlined} from "@ant-design/icons";
import AutoAwesomeMosaicTwoToneIcon from '@mui/icons-material/AutoAwesomeMosaicTwoTone';
import {MENU} from "../../../reducer/menuActor";

const examples = {
    title: "Examples",
    children: [
        {
            id: MENU.CHART_EXAMPLE,
            title: "Chart",
            path: "/examples/chart",
            icon: LineChartOutlined
        },
        {
            id: MENU.GRID_EXAMPLE,
            title: "Grid",
            path: "/examples/grid",
            icon: GroupOutlined
        }
    ]
}

export default examples;