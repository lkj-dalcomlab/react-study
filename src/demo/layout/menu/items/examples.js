import {GroupOutlined, LineChartOutlined} from "@ant-design/icons";
import {MENU} from "../../../reducer/menuActor";

const examples = {
    title: "Examples",
    type: "group",
    children: [
        {
            id: MENU.CHART_EXAMPLE,
            title: "Chart",
            type: "item",
            path: "/examples/chart",
            icon: LineChartOutlined
        },
        {
            id: MENU.GRID_EXAMPLE,
            title: "Grid",
            type: "item",
            path: "/examples/grid",
            icon: GroupOutlined
        }
    ]
}

export default examples;