import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addmovieTrailer } from "../utils/moviesSlice";


const useVideoBackground = (movieID) =>{
  const dispatch = useDispatch();
  const movieVideos = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" +movieID+"/videos", API_OPTIONS);
    const json = await data.json();
   
    const trailerObject = json.results.filter((video) => video.name === "Official Trailer");
     dispatch(addmovieTrailer(trailerObject[0]));
    
  }
  useEffect(() => {
    movieVideos();
  }, [])

}
export default useVideoBackground;