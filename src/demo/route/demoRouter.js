import MainLayout from "../layout/MainLayout";
import HostLayout from "../layout/management/host/HostLayout"
import DashboardLayout from "../layout/dashboard";
import ChartMain from "../layout/examples/chart";
import GridLayout from "../layout/examples/grid";
import ServiceLayout from "../layout/management/service/ServiceLayout";

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
                path: "management/service/:name",
                element: <ServiceLayout/>,
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