import { useState,useEffect } from "react";
import Cards from "../components/MovieCards";
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
import{BiCameraMovie, BiSearchAlt2} from "react-icons/bi"
import "../css/Movie.css"
// console.log(moviesURL, apiKey)
const searchUrl= import.meta.env.VITE_SEARCH;


const Home = () => {
    const [topMovies,setTopMovies]=useState([]);
    const fetchInfo= async(url)=>{
       try{const answer= await fetch(url);
        const data = await answer.json();
        // setTopMovies(data.results)
        // setTopMovies(data.results)
        setTimeout(() => {
            setTopMovies(data.results);
          }, 1000);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    }
    
    useEffect(() =>{
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
        fetchInfo(topRatedUrl);
        // console.log(topRatedUrl)

    },[])
    return ( 
        <div className="container">
            <h2 className="h2">Top Rated Movies</h2>
            <div className="movies-container">
                {topMovies.length ===0  && <div id="load"><BiCameraMovie ></BiCameraMovie></div>}
                {topMovies.length > 0 && topMovies.map((movie)=> <Cards key={movie.id} movie={movie}></Cards> )}
            </div>

        </div>
    );
}
 
export default Home;