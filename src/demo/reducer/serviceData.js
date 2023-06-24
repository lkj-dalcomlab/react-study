import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    menuOpen: false,
    selectService: ''
}

const serviceData = createSlice({
    name: "serviceData",
    initialState,
    reducer: {
        serviceMenuOpen: (state, action) => {
            state.menuOpen = action.payload;
        },
        selectedService: (state, action) => {
            state.selectService = action.payload;
        }
    }
});

export default serviceData.reducer;

export const { serviceMenuOpen, selectedService } = serviceData.actions;