import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    processList: [],
    selectedPIDs: [],
}

const processData = createSlice({
    name: "processData",
    initialState,
    reducers: {
        updateCategories: (state, action) => {
            return {...state, categories: [...action.payload]}
        },
        updateProcessList: (state, action) => {
            return {...state, processList: [...action.payload]}
        },
        selectProcessId: (state, action) => {
            const pids = [...state.selectedPIDs];
            const find = pids.findIndex(e => e === action.payload);
            if (find !== -1) {
                pids.splice(find, 1);
                return {...state, selectedPIDs: [...pids]}
            }
            return {...state, selectedPIDs: [...state.selectedPIDs, action.payload]}
        },
        selectProcessIds: (state, action) => {
            return {...state, selectedPIDs: [...action.payload]}
        }
    }
});

export default processData.reducer;

export const {updateCategories, updateProcessList, selectProcessId, selectProcessIds} = processData.actions;