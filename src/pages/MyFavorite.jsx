import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsFillSuitHeartFill, BsHeart } from "react-icons/bs";
import {FaHeartBroken} from "react-icons/fa";
import Cards from "../components/MovieCards"; // Import the Cards component
import "../css/Fav.css";

const ImageUrl = import.meta.env.VITE_IMG;

const Myfavorite = () => {
  // Initialize state with favorite movies from localStorage
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const formatNumbers = (number) => {
    return number.toFixed(1);
  };

  const MoveWindowUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  const handleToggleFavorite = (movie) => {
    // Update the favoriteMovies array in the localStorage
    const updatedFavorites = favoriteMovies.filter((favMovie) => favMovie.id !== movie.id);
    localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
    setFavoriteMovies(updatedFavorites); // Update the state with the new list
  };

  useEffect(() => {
    // Retrieve favorite movies from localStorage
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    setFavoriteMovies(storedFavorites);
  }, [handleToggleFavorite]);

  return (
    <div>
      <h2 className="titles"> Favorite Movies</h2>
      <div className="card">
        {favoriteMovies.length ===0 && <p className="conditional"> No Favorite movies added yet <span className="broken"><FaHeartBroken></FaHeartBroken></span></p>}
        {favoriteMovies.map((movie) => (
          <Cards
            key={movie.id}
            movie={movie}
            handleToggleFavorite={handleToggleFavorite}
            formatNumbers={formatNumbers}
            MoveWindowUp={MoveWindowUp}
          />
        ))}
      </div>
    </div>
  );
};

export default Myfavorite;