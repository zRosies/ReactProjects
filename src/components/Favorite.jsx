<<<<<<< HEAD
=======
import React, {useState, useEffect } from "react";
import Movies from "../pages/Movies"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


function useFavorite() {
  
  function loadFavoriteMoviesFromLocalStorage() {
    const storedMovies = localStorage.getItem("favoriteMovies");
    return storedMovies ? JSON.parse(storedMovies) : [];
  }



  const [favoriteMovies, setFavoriteMovies] = useState(loadFavoriteMoviesFromLocalStorage);

  const addToFavorites = (movieData) => {
    setFavoriteMovies((prevFavorites) => [...prevFavorites, movieData]);
  };

  const removeFromFavorites = (movieId) => {
    setFavoriteMovies((prevFavorites) =>
      prevFavorites.filter((movie) => movie.id !== movieId)
    );
  };

  const toggleFavorite = async (movieId) => {
    if (favoriteMovies.some((movie) => movie.id === movieId)) {
      removeFromFavorites(movieId);
    } else {
      const url = `${moviesURL}/${movieId}?${apiKey}`;
      try {
        const response = await fetch(url);
        const movieData = await response.json();
        addToFavorites(movieData);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  return { favoriteMovies, toggleFavorite };
}

export default useFavorite;
>>>>>>> ea326a9c1a2968616efc3c013b2fdacac4a29c20
