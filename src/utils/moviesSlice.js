import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movie",
    initialState: {
        nowPlayingMovie:{}
    },
    reducers:{
    addNowPlayingMovie:(state,action)=>{
        state.nowPlayingMovie = action.payload;
    },
     removeNowPlayingMovie:(state)=>{
      state.nowPlayingMovie = null;
    }

    }
})

export const {addNowPlayingMovie,removeNowPlayingMovie} = moviesSlice.actions;
export default moviesSlice.reducer;