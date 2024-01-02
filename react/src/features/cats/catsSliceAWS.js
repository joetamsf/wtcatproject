import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchLikes = createAsyncThunk(
    'cats/fetchLikes',
    async () => {
        const res = await axios.post(
            API_URL, {
                query: `
                    query MyQuery {
                        listLikescounts {
                            items {
                            _id
                            likes
                            name
                            birth
                            description
                            imgs
                            imgFolder
                            thumbs
                            thumbnail
                            special
                            location
                            }
                        }
                    }
                
                `
            },
            {
                headers: {
                    'x-api-key': API_KEY
                }
            }
        );

        const data = {
            allLikes: res.data.data.listLikescounts.items
        };
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