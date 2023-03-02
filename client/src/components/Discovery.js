import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import './Discovery.css'

const API_URL_DISCOVERY = 'https://api.themoviedb.org/3/discover/tv?api_key=5237caacb7e0c70115c1cc6b132a3767&language=en-US&sort_by=popularity.desc&page=1&with_watch_monetization_types=free&with_status=0&with_type=0';

const Discovery = () => {
  const [movies, setMovies] = useState([]);
  // const history = useHistory();

  useEffect(() => {
    fetch(API_URL_DISCOVERY)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => {
        console.error('Erro ao fazer requisição:', error);
      });
  }, []);

  function handleClick(movieId) {
    // Navegue para a página do filme
    // history.push(`/filme/${movieId}`);
  }

  return (
    <div>
      <div className="movies-list">
        {movies.map(movie => (
          <div className="movie" key={movie.id} onClick={() => handleClick(movie.id)}>
            {/* <h2>{movie.name}</h2> */}
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.name} poster`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discovery;