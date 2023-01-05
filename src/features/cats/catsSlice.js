import { createSlice } from "@reduxjs/toolkit";
import { CATS } from "../../app/CATS";

const initialState = {
    catsArray: CATS
}

const catsSlice = createSlice({
    name: 'cats',
    initialState
})

export const catsTabSelector = (state) => {
    return state.cat.catsArray;
}

export const selectCatByName = (name) => (state) =>{
    return state.cat.catsArray.find((cat) => cat.name === name);
}

export default catsSlice.reducer;