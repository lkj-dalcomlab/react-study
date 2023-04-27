import {configureStore} from "@reduxjs/toolkit";
import menuActor from "./menuActor";
import processData from "./processData";
import dashboardSwitch from "./dashboardSwitch";

const store = configureStore({
    reducer: {menuActor, processData, dashboardSwitch }
})

export default store;