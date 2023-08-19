
import { useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import Cards from "../components/MovieCards"

import "../css/Movie.css"
const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
    const [searchParams]= useSearchParams();
    const[movies, setMovies]= useState([]);
    const query= searchParams.get("q");

    const SearchedMovies= async(url)=>{

       try{  const answer= await fetch(url);
            const data = await answer.json();
       
            
            setTimeout(() => {
                setMovies(data.results);
            }, 1000);
            } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    
    useEffect(() => {
            
            setMovies([])

            const newUrl = `${searchURL}?${apiKey}&query=${query}`;
            SearchedMovies(newUrl);
            console.log("API URL:", newUrl)

    },[query])


    return ( 
        <>
            <div className="container">
            <h2 className="results">Results for <span className="span">{query}...</span></h2>
                <div className="movies-container">
                    {movies.length ===0  && <div id="load"><BiCameraMovie ></BiCameraMovie></div>}
                    {movies.length > 0 && movies.map((movie)=> <Cards key={movie.id} movie={movie}></Cards> )}
                </div>

            </div>
            
        </>
        
     );
}
 
export default Search;