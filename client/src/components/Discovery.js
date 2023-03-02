import React, { useEffect, useState } from 'react';

const API_URL_DISCOVERY = 'https://api.themoviedb.org/3/discover/tv?api_key=5237caacb7e0c70115c1cc6b132a3767&language=en-US&sort_by=popularity.desc&page=1&with_watch_monetization_types=free&with_status=0&with_type=0';

const Discovery = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL_DISCOVERY)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results);
    })
    .catch(error => {
      console.error('Error: ', error);
    });
  }, []);

  return (
    <div>
      <h1>Discovery</h1>
      <div className="movies-list">
        {movies.map(movie => (
          <div className="movie" key={movie.id}>
            <h2>{movie.name}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.name} poster`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discovery;