import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import './Discovery.css'
import { discover } from '../ApiService';


const Discovery = () => {
  const [shows, setShows] = useState([]);
  useEffect(() => {
      const getDiscovery = async () => {
        try {
          const response = await discover();
          setShows(response.results);
        } catch (error) {
          console.error('Erro ao fazer requisição:', error);
        }
      }
      getDiscovery();
    }, []);
    
  //   fetch(API_URL_DISCOVERY)
  //     .then(response => response.json())
  //     .then(data => {
  //       setShows(data.results);
  //     })
  //     .catch(error => {
  //       console.error('Erro ao fazer requisição:', error);
  //     });
    
  // }, []);

  function handleClick(movieId) {
    // Navegue para a página do filme
    // history.push(`/filme/${movieId}`);
  }

  return (
    <div>
      <div className="shows-list">
        {shows.map(show => (
          <div className="show" key={show.id} onClick={() => handleClick(show.id)}>
            {/* <h2>{movie.name}</h2> */}
            <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={`${show.name} poster`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discovery;