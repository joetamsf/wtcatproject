import { createSlice } from "@reduxjs/toolkit";

const initialState = 
    {
        lastCheckedAlbum: 'Chibi'
    }

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

