import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movie",
    initialState: {
        nowPlayingMovie:null,
        movieTrailer:null,
    },
    reducers:{
    addNowPlayingMovie:(state,action)=>{
        state.nowPlayingMovie = action.payload;
    },
     addmovieTrailer:(state,action)=>{
      state.movieTrailer = action.payload;
    }

    }
})

export const {addNowPlayingMovie,addmovieTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;