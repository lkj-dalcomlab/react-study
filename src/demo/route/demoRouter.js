import MainLayout from "../layout/MainLayout";
import ServerLayout from "../layout/management/ServerLayout"
import ExampleChartLayout from "../layout/status/ExampleChartLayout";

const demoRouter = [
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "management/server",
                element: <ServerLayout/>
            },
            {
                path: "status/chart",
                element: <ExampleChartLayout/>
            }
        ]
    }
]

export default demoRouter;