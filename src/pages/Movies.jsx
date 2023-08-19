import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { BiCameraMovie,BiTimeFive} from "react-icons/bi";

import {BsWallet2, BsGraphUpArrow,BsFileEarmarkTextFill} from "react-icons/bs";
import Cards from "../components/MovieCards"
import "../css/Details.css"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movies = () => {
    const{id}= useParams();
    const[movie, setMovie]=useState(null);
    const [isLoading,setLoading]=useState(true);
    const fetchMovie= async(url)=>{

        try{  const answer= await fetch(url);
             const data = await answer.json();
        
             
             setTimeout(() => {
                 setMovie(data);
                 setLoading(false)
             }, 1000);
             } catch (error) {
                setLoading(false)
             console.error('Error fetching data:', error);
         }
    }
    useEffect(()=>{
        const newUrl=`${moviesURL}${id}?${apiKey}`
        fetchMovie(newUrl)
    })
    const FormatCurrency=(number)=>{
        return number.toLocaleString("en-Us",{
            style:"currency",
            currency:"USD"
        })
    }

     
    return ( 
    <>
        <div className="details">
            {isLoading && <span id="dif"><BiCameraMovie ></BiCameraMovie></span>}
            {movie && <>{movie.title}
                <Cards movie={movie} showLink={false}></Cards>
                <p className="tag">"{movie.tagline}"</p>
                <div className="info">
                    
                    <p className="budget"><span className="icons"><BsWallet2></BsWallet2></span> Budget  :  {FormatCurrency(movie.budget)} USD</p>
                    <p className="duration"><span className="icons"><BiTimeFive></BiTimeFive></span>Duration: {movie.runtime} min</p>
                    <p className="revenue"> <span className="icons"><BsGraphUpArrow></BsGraphUpArrow></span>Revenue: {FormatCurrency(movie.revenue)} USD</p>
                    <p className="des"> <span className="icons"> <BsFileEarmarkTextFill/></span> Description:</p>
                    <p className="description">{movie.overview}</p>
                </div>
            </>}
        </div>
    </>
      
    
     );
}
 
export default Movies;