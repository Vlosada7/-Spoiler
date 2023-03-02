import React from 'react';
import { useEffect, useState } from 'react';
import { getFavs } from '../ApiService';
import { isEmpty } from 'lodash';


const Home = () => {
  const [showList, setShowList] = useState([]);
  
  useEffect(() => {
    getFavs()
    .then(res => {
      setShowList(res);
    })
  }, []);

  function handleClick(movieId) {
    // Navegue para a página do filme
    // history.push(`/filme/${movieId}`);
  }

  return (
    <div>
      {isEmpty(showList) ? (
        <p>Sem séries assistidas por enquanto</p>
        ) : (
        <div className="home-list">
          {showList.map(show => (
            <div
              className="show"
              key={show.id}
              onClick={() => handleClick(show.id)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt={`${show.name} poster`}
              />
            </div>
          ))}
        </div>
        )}
    </div>
  );
};

export default Home;