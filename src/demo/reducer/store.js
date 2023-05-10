import {configureStore} from "@reduxjs/toolkit";
import menuActor from "./menuActor";
import processData from "./processData";
import dashboardSwitch from "./dashboardSwitch";
import themeMode from "./themeMode";

const store = configureStore({
    reducer: {menuActor, processData, dashboardSwitch, themeMode}
})

export default store;