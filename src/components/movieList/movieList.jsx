import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/card.jsx";




const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4ea44d902bb1270a757cdcc766a1bcb6&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovieList(data.results || []);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
  }, [type]);

  return (
    <div className="movie_list">
      {movieList.map((movie) => (
        <Cards key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
