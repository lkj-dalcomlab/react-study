import {configureStore} from "@reduxjs/toolkit";
import menuActor from "./menuActor";
import processData from "./processData";

const store = configureStore({
    reducer: {menuActor, processData}
})

export default store;