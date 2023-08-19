import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsFillSuitHeartFill, BsHeart } from "react-icons/bs";
<<<<<<< HEAD
const ImageUrl = import.meta.env.VITE_IMG;
import "../css/Fav.css";

const Myfavorite = () => {
//   const { favoriteMovies, toggleFavorite } = useFavorite();
    
     const [refreshToggle, setRefreshToggle] = useState(false); // Add a state for refreshing toggle
=======
import useFavorite from "../components/Favorite";
const ImageUrl = import.meta.env.VITE_IMG;
import "../pages/Fav.css";

const Myfavorite = () => {
  const { favoriteMovies, toggleFavorite } = useFavorite();
  const [refreshToggle, setRefreshToggle] = useState(false); // Add a state for refreshing toggle
>>>>>>> ea326a9c1a2968616efc3c013b2fdacac4a29c20

  const formatNumbers = (number) => {
    return number.toFixed(1);
  };

  const MoveWindowUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
<<<<<<< HEAD
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

  const getFavorites = (movieData) => {
    const storedData = localStorage.getItem("favoriteMovies");
    const favoriteMovies = storedData ? JSON.parse(storedData) : [];

    return favoriteMovies
  }

  const [isFavorite,setFavorite]=useState();
  const favoriteMovies = getFavorites();

=======

  const handleToggleFavorite = async (movieId) => {
    await toggleFavorite(movieId); // Call the toggleFavorite function
    setRefreshToggle(!refreshToggle); // Update the state to trigger refresh
  };

>>>>>>> ea326a9c1a2968616efc3c013b2fdacac4a29c20
  return (
    <div>
      <h2 className="titles"> Favorite Movies</h2>
      <div className="card">
        {favoriteMovies.map((movie) => (
          <div key={movie.id}>
            <img src={ImageUrl + movie.poster_path} alt={movie.title} />
            <p className="yellow">
              <FaStar /> {formatNumbers(movie.vote_average)}
            </p>
            <p className="tilt">{movie.title}</p>
            <p className="heart">
              Remove from favorite:{" "}
              <span className="ball">
                <span
                  id="heart"
                  className={
                    favoriteMovies.some(
                      (favMovie) => favMovie.id === movie.id
                    )
                      ? "active"
                      : ""
                  }
<<<<<<< HEAD
                  onClick={() => handleFavorite(movie)} // Use the new handler
=======
                  onClick={() => handleToggleFavorite(movie.id)} // Use the new handler
>>>>>>> ea326a9c1a2968616efc3c013b2fdacac4a29c20
                >
                  {favoriteMovies.some((favMovie) => favMovie.id === movie.id) ? (
                    <BsFillSuitHeartFill color="red" />
                  ) : (
                    <BsHeart />
                  )}
                </span>
              </span>
            </p>
            <Link
              className="detail"
              to={`/movie/${movie.id}`}
              onClick={MoveWindowUp}
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myfavorite;  