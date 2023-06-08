import MainLayout from "../layout/MainLayout";
import HostLayout from "../layout/management/HostLayout"
import DashboardLayout from "../layout/dashboard";
import ChartMain from "../layout/examples/chart";
import GridLayout from "../layout/examples/grid";

const demoRouter = [
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <DashboardLayout/>
            },
            {
                path: "management/host/:name",
                element: <HostLayout/>
            },
            {
                path: "examples/chart",
                element: <ChartMain/>
            },
            {
                path: "examples/grid",
                element: <GridLayout/>
            }
        ]
    }
]

export default demoRouter;