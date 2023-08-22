
import React, { useEffect, useState } from "react";

import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { BsFillSuitHeartFill, BsHeart } from "react-icons/bs";


const ImageUrl = import.meta.env.VITE_IMG;

const Cards = ({ movie, showLink = true }) => {
  const [isFavorite, setFavorite] = useState();

  const HandleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  const formatNumbers = (number) => {
    return number.toFixed(1);
  };

  const handleFavorite = (movieData) => {
    const storedData = localStorage.getItem("favoriteMovies");
    const favoriteMovies = storedData ? JSON.parse(storedData) : [];

    const isFavoriteMovie = favoriteMovies.some((movie) => movie.id === movieData.id);


    const updateFavoriteMovies = isFavoriteMovie
      ? favoriteMovies.filter((movie) => movie.id !== movieData.id)
      : [...favoriteMovies, movieData];

    localStorage.setItem("favoriteMovies", JSON.stringify(updateFavoriteMovies));
    setFavorite(!isFavorite);
  };

  useEffect(() => {
    
    const isMovieFavorited = getFavorites().some((favMovie) => favMovie.id === movie.id);
    setFavorite(isMovieFavorited);
  }, [movie]);

  const getFavorites = () => {
    const storedData = localStorage.getItem("favoriteMovies");
    return storedData ? JSON.parse(storedData) : [];
  };

    const HandleFavorite = () => {
      toggleFavorite(movie.id); // Use toggleFavorite function here
    };
    useEffect(()=>{

    },[HandleClick])


  return (
    <>
      <div className="cards">
        {movie.poster_path ? (
          <img src={ImageUrl + movie.poster_path} alt={movie.title} />
        ) : (
          <img
            src="https://lh3.googleusercontent.com/pw/..."
            alt={movie.title}
          />
        )}

        <h2 className="title">{movie.title}</h2>
        <p className="FaStar">
          <span className="new"><FaStar /></span>
          {formatNumbers(movie.vote_average)}
        </p>
        <p className="heart">
          Mark as favorite:{" "}
          <span className="ball">
            <span
              id="heart"
              className={isFavorite ? "active" : ""}
              onClick={() => handleFavorite(movie)}
            >
              {isFavorite ? (
                <BsFillSuitHeartFill color="red" />
              ) : (
                <BsHeart />
              )}
            </span>
          </span>
        </p>
        {showLink && (
          <Link to={`/movie/${movie.id}`} onClick={HandleClick}>
            Detalhes
          </Link>
        )}
      </div>
    </>
  );
};

export default Cards;