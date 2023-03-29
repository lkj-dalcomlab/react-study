import {configureStore} from "@reduxjs/toolkit";
import menuActor from "./menuActor";

const store = configureStore({
    reducer: {menuActor}
})

export default store;