import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShow } from "../../ApiService";
import { getEp } from "../../ApiService";
import { Link } from "react-router-dom";
import "./SeasonNumber.css"

const SeasonNumber = () => {
  const { id, seasonId } = useParams();
  const [show, setShow] = useState([]);
  const [season, setSeason] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const getId = async () => {
      try {
        const response = await getShow(id)
        setShow(response)
      } catch (error) {
        console.error('Error: ', error);
      }
    };
    getId();
  })

  useEffect(() => {
    const getEps = async () => {
      try {
        const response = await getEp(id, seasonId)
        setSeason(response)
        setEpisodes(response.episodes)
      } catch (error) {
        console.error('Error: ', error);
      }
    };
    getEps();
  })

  return (
    <div className="season-info">
        <div className="button-image">
          <Link to={`/show/${id}/seasons`}>
            <button>Back</button>
          </Link>
            <img
              className="img-in"
              src={`https://image.tmdb.org/t/p/w500${season.poster_path}`}
              alt={`${seasonId} season poster`}
            />
            <p>{season.overview}</p>
        </div>
        <div className="name-seasons">
          <h3>{show.name}</h3>
          <h4>Season {seasonId}</h4>
          <h5>Episodes:</h5>
          {episodes.map((ep) => (
            <div className="season">
              <Link to={`/tv/${id}/season/${seasonId}/episode/${ep.episode_number}`}>
                <p>{ep.episode_number}</p>
              </Link>
            </div>
          ))}
        </div>
        <div>
          
        </div>
    </div>
  )
};

export default SeasonNumber; 