import {useRoutes} from "react-router-dom";
import demoRouter from "./demoRouter";

export default function MainRouter() {
    return useRoutes(demoRouter)
}
