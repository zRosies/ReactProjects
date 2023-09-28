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
          <img src="https://lh3.googleusercontent.com/pw/ADCreHeP-xv_qladCLqYvWlYgvmnX2BSJs5PVPy7_55wpwvY_nP0FeS2P0zhLckeladAvzgF_ymu1fjyVtx44Ez9eNSPZij7lSEBBs5qjM-JwypSTtfqMo0DQgbnsBy3N6ZyBEIClM2SyMjOeVgydk9-Uh0Yy-IQOtcw-1in4b8LKvw9Q02Esk9T-KsmNjIiaHIGfZgUmQgZDZo17JYtOELfx_XrP4kDhN0uygW8hF6dqVMyw1DtpYtoYhikE5MPv80zKX5qvcA4ib0geOgilt7sBQ1420_aWT_2uRuG5TBfudKcPowj_PMch8vp5_QprDpgJ__ExP1UoyLkVRc1pKM_nzZCbxI-WT0IHQRKGx9BSmDUOU4jBoKoGGDY8VgOmEI2z2csrcaF4smg0QULfIgnFjazDZo_s5C7jdmbxF8_zzHVn6oOeKcPoHYsqzOKavaJW_uTI6iaH1n3C4YaMbnHuHIuHUs9ofiZnoi3XxsqpO6H9ONQKIzCAtZ6xcU3UrhoS8RxQqapdnN4WUnnyu9WIciIbYudBRK8pNhqslQDFWz2cq_Y59XsPUQVBPC7o5oOuqinCJsDUjyBR6BDC0Af_4u2y4A9E8mm9s5ytx3HNRpO2QVJb5q3o6ytZzat-NuJ6X-zKx2NiuqDRZw8y5xEnAfh70x7IiutMltTZ9gRc1gOCbwRkcqiDEtnMvB-0JHkFe-JzTjLdq6PSRmWvTL0pClJqstLvv1xF4tADZrAD7x0fuZQFzHeQtKqddXQklCg04KNIVezsDDh6ykteTgxiiv2-qwm9u1Vd2blC9VJ5wpT1Ookj5BA9cJSgXx65LMn0m5_0oqnL9Va_HPHeN50rgZBpOVcQwtyc-ndoExwIdRS5vkspzAlGfH0air4WHVIwrV35ZT3cacvFqUrh_nsR-ry78h2s3KvsDiMBwDit7yiLEf9pPRVcdq1cFeBH5WiWWXCYBQsoCyG8t4RJuMxGaJsskrl3pKEsKvp34O2kx_WSE4DHD5r8N3MQh049CPQPfM3wdo=w766-h943-s-no?authuser=0" alt={movie.title} />
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