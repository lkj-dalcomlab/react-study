import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    menuOpen: false
}
const menuActor = createSlice({
    name: "menuActor",
    initialState,
    reducers: {
        menuSwitch: (state) => {
            state.menuOpen = !state.menuOpen;
        }
    }
})

export default menuActor.reducer;
export const { menuSwitch } = menuActor.actions;