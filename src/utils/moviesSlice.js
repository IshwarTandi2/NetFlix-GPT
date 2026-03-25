import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movie",
    initialState: {
        nowPlayingMovie:null,
        movieTrailer:null,
        popularMovie:null,
        topRatedMovie:null,
        upcomingMovie:null,
    },
    reducers:{
    addNowPlayingMovie:(state,action)=>{
        state.nowPlayingMovie = action.payload;
    },
     addmovieTrailer:(state,action)=>{
      state.movieTrailer = action.payload;
    },
    addPopularMovie:(state,action)=>{
     state.popularMovie = action.payload;

    },
     addTopRatedMovie:(state,action)=>{
     state.topRatedMovie = action.payload;

    },
     addUpcomingMovie:(state,action)=>{
     state.upcomingMovie = action.payload;

    }
    

    }
})

export const {addNowPlayingMovie,addmovieTrailer,addPopularMovie,addTopRatedMovie,addUpcomingMovie} = moviesSlice.actions;

export default moviesSlice.reducer;