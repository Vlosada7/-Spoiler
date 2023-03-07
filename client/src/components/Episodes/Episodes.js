import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEp } from '../../ApiService';
import { Link } from 'react-router-dom';

const Episodes = () => {
  const { id, seasonNumber, epNumber} = useParams();
  const [episode, setEpisode] = useState([]);
  const epIndex = epNumber - 1;
  

  useEffect(() => {
    const getEps = async () => {
      try {
        const response = await getEp(id, seasonNumber)
        setEpisode(response.episodes.at(epIndex))
        console.log(response.episodes.at(epIndex))
      } catch (error) {
        console.error('Error: ', error)
      }
    };
    getEps();
  })

  return (
    <div className='info'>
      <div className='titulo-imagem'>
        <img
          className='img-inside'
          src={`https://image.tmdb.org/t/p/w500${episode.still_path}`}
          alt={`${episode.name}`}
          />
          <h3>{episode.name}</h3>
      </div>
      <div>
        <p>Episode overview:</p>
        <p>{episode.overview}</p>
        <p>Episode average: {episode.vote_average}</p>
        <Link to={`/show/${id}/seasons/${seasonNumber}`}>
          <button>Back</button>
        </Link>
      </div>

    </div>
  )

};

export default Episodes;