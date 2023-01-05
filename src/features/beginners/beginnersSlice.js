import { createSlice } from "@reduxjs/toolkit";
import { BEGINNERS } from "../../app/BEGINEERS";


const initialState = {
    beginnersArray: BEGINNERS
}

const beginnersSlice = createSlice({
    name: 'beginners',
    initialState
})

export default beginnersSlice.reducer;

export const selectAllTips = (state) => {
    return state.beginner.beginnersArray;
}


