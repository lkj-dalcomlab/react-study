import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    mode: 'dark'
}

const themeMode = createSlice({
    name: "themeMode",
    initialState,
    reducers: {
        changeMode: (state, action) => {
            state.mode = action.payload;
        }
    }
})

export default themeMode.reducer;
export const {changeMode} = themeMode.actions;