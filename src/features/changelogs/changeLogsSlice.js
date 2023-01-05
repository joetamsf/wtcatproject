import { CHANGELOGS } from "../../app/CHANGELOGS";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    changeLogsArray: CHANGELOGS
}

const changeLogsSlice = createSlice({
    name: 'changelog',
    initialState
})

export default changeLogsSlice.reducer;

export const selectAllLogs = (state) => {
    return state.changelog.changeLogsArray;
}
