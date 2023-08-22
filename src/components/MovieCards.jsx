import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { BsFillSuitHeartFill, BsHeart } from "react-icons/bs";

const ImageUrl = import.meta.env.VITE_IMG;

const Cards = ({ movie, showLink = true }) => {
  const [isFavorite, setIsFavorite] = useState(
    JSON.parse(localStorage.getItem("favoriteMovies"))?.some(
      (favMovie) => favMovie.id === movie.id
    ) || false
  );

  const HandleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  const formatNumbers = (number) => {
    return number.toFixed(1);
  };

  const HandleFavorite = () => {
    let favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];

    if (!isFavorite) {
      favoriteMovies.push(movie);
    } else {
      favoriteMovies = favoriteMovies.filter((favMovie) => favMovie.id !== movie.id);
    }

    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
    setIsFavorite(!isFavorite); // Toggle the favorite state
  };

  return (
    <>
      <div className="cards">
        {movie.poster_path ? (
          <img src={ImageUrl + movie.poster_path} alt={movie.title} />
        ) : (
          <img src="https://lh3.googleusercontent.com/pw/..." alt={movie.title} />
        )}

        <h2 className="title">{movie.title}</h2>
        <p className="FaStar">
          <FaStar />
          {formatNumbers(movie.vote_average)}
        </p>
        <p className="heart">
          Mark as favorite:{" "}
          <span className="ball">
            <span
              id="heart"
              className={isFavorite ? "active" : ""}
              onClick={HandleFavorite}
            >
              {isFavorite ? <BsFillSuitHeartFill color="red" /> : <BsHeart />}
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