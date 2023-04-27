import {createSlice} from "@reduxjs/toolkit";

export const LAYOUT = {
    NONE: "",
    PROCESS_STATUS: 10,
    POPUP: 20,
    TAB: 30,
    ACCORDIAN: 40
}

const initialState = {
    layoutState: LAYOUT.NONE
}

const dashboardSwitch = createSlice({
    name: "dashboardSwitch",
    initialState,
    reducers: {
        switchLayout(state, action) {
            state.layoutState = action.payload;
        }
    }
})

export default dashboardSwitch.reducer;

export const {switchLayout} = dashboardSwitch.actions;