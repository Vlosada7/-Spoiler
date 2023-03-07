import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShow } from "../../ApiService";
import { getEp } from "../../ApiService";
import { Link } from "react-router-dom";

const SeasonNumber = () => {
  const { id, seasonId } = useParams();
  const [show, setShow] = useState([]);
  const [season, setSeason] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  console.log(id)
  console.log(seasonId)

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
    <div>
      <div>
      <Link to={`/show/${id}/seasons`}>
        <button>Back</button>
      </Link>
        <h3>{show.name}</h3>
          <img
            src={`https://image.tmdb.org/t/p/w500${season.poster_path}`}
            alt={`${seasonId} season poster`}
          />
        </div>
        <div>
          {episodes.map((ep) => (
            <div>
              <Link to={`/tv/${id}/season/${seasonId}/episode/${ep.episode_number}`}>
                <p>{ep.episode_number}</p>
              </Link>
            </div>
          ))}
        </div>
        <div>
          <h3>Season {seasonId}:</h3>
          <p>{season.overview}</p>
        </div>
    </div>
  )
};

export default SeasonNumber; 