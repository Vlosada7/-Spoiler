import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEp } from '../../ApiService';
import { Link } from 'react-router-dom';
import "./Episode.css"
import {FiArrowLeftCircle} from 'react-icons/fi'

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
      <div>
      <Link to={`/show/${id}/seasons/${seasonNumber}`}>
          <button className="btn-back">
            <FiArrowLeftCircle size={40} color="rgba(255, 255, 255, 1)"/>
          </button>
        </Link>
      </div>
      <div className='titulo-imagem'>
        <img
          className='img-in'
          src={`https://image.tmdb.org/t/p/w500${episode.still_path}`}
          alt={`${episode.name}`}
          />
          <h2>{episode.name}</h2>
      </div>
      <div>
        <h3>Episode overview:</h3>
        <p>{episode.overview}</p>
        <p>Episode average: {episode.vote_average}</p>
        <Link to={`/tv/${id}/reviews`}>
							<button className="btn btn-2">Reviews of the episode</button>
				</Link>
        
      </div>

    </div>
  )

};

export default Episodes;