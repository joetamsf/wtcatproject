import { createSlice } from "@reduxjs/toolkit";

const initialState = 
    {
        lastCheckedAlbum: 'Chibi'
    }
{/*
    Below code is used to record the last selected tab 
    in /cats, so if a visitor goes to other page after 
    an arbitrary tab is selected,it will show their choice when he/she returns
*/}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        addlastCheckedAlbum: (state, action) => {
            return {
                ...state.lastCheckedAlbum,
                lastCheckedAlbum: action.payload
             } 
        } 
    }
})

export const selectCheckedAlbum = (state) => {
    return state.app.lastCheckedAlbum;
}

export const { addlastCheckedAlbum } = appSlice.actions;
export default appSlice.reducer;

