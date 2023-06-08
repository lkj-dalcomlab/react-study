import { createSlice } from '@reduxjs/toolkit'

export const MENU = {
    HOME: 'Home',
    MANAGED_HOST: 'ManagedHost',
    CHART_EXAMPLE: 'ChartExample',
    GRID_EXAMPLE: 'GridExample'
}

const initialState = {
    menuOpen: false,
    selectMenuId: MENU.HOME
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
        },
        // currentPath:() => {
        //     return location.pathname;
        // }
    }
})

export default menuActor.reducer;
export const { menuSwitch, selectMenuItem } = menuActor.actions;