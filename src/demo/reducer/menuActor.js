import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    menuOpen: false,
    selectMenuId: ''
}
const menuActor = createSlice({
    name: "menuActor",
    initialState,
    reducers: {
        menuSwitch: (state, action) => {
            state.menuOpen = !action.payload.menuOpen;
        },
        selectMenuItem: (state, action) => {
            state.selectMenuId = action.payload.selectMenuId;
        }
    }
})

export default menuActor.reducer;
export const { menuSwitch, selectMenuItem } = menuActor.actions;