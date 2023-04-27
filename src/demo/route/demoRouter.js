import MainLayout from "../layout/MainLayout";
import ServerLayout from "../layout/management/ServerLayout"
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
                path: "management/server",
                element: <ServerLayout/>
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