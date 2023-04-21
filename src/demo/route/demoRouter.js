import MainLayout from "../layout/MainLayout";
import ServerLayout from "../layout/management/ServerLayout"
import DashboardLayout from "../layout/dashboard";
import ChartMain from "../layout/status/chart";

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
                path: "status/chart",
                element: <ChartMain/>
            }
        ]
    }
]

export default demoRouter;