import {configureStore} from "@reduxjs/toolkit";
import menuActor from "./menuActor";
import processData from "./processData";
import dashboardSwitch from "./dashboardSwitch";
import themeMode from "./themeMode";
import serviceData from "./serviceData";

const store = configureStore({
    reducer: {menuActor, processData, dashboardSwitch, themeMode, serviceData}
})

export default store;