import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovie } from "../utils/moviesSlice";
const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular", API_OPTIONS);
        const json = await data.json();
      
        dispatch(addPopularMovie(json.results));
    }

    useEffect(() => {
        getPopularMovies();
    }, [])
}


export default usePopularMovies;