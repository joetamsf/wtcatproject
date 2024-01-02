import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Use below code for using apollo server with MongoDB

import sign from "jwt-encode";

const url = process.env.REACT_APP_GQLURL;
const encode_sec = process.env.REACT_APP_TOKEN_SEC
const data = {
    usr: process.env.REACT_APP_TOKEN_USR,
    aud: 'wtcprojQL'
}
const token = sign(data, encode_sec)

export const fetchLikes = createAsyncThunk(
    'cats/fetchLikes',
    async () => {
        const res = await axios.post(
            url, {
                query: `query AllLikes {
                    allLikes {
                        name
                        likes
                        birth
                        description
                        thumbnail
                        imgFolder
                        special
                        imgs
                        thumbs
                        likes
                        location
                    }
                }`
            },
            { headers: {
                Authorization: token
            }}
        );
        const data = res.data.data;
        return data;
    }  
)

const initialState = {
    catsArray: [],
    loading: true,
    error: false
}


const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchLikes.pending]: (state) => {
            state.loading = true;
            state.error = false
        },
        [fetchLikes.fulfilled]: (state, action) => {
            state.loading = false;
            state.catsArray = action.payload.allLikes;
        },
        [fetchLikes.rejected]: (state) => {
            state.loading = false;
            state.error = true
        }
    }
})

export const catsArrStatus = (state) => {
    return state.cat.loading;
}

export const catsArrErr = (state) => {
    return state.cat.error;
}

export const catsTabSelector = (state) => {
    return state.cat.catsArray;
}

export const selectCatByName = (name) => (state) =>{
    return state.cat.catsArray.find((cat) => cat.name === name);
}

export default catsSlice.reducer;