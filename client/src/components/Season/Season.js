import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShow } from "../../ApiService";
import './Season.css'
import { Link } from "react-router-dom";
import {FiArrowLeftCircle} from 'react-icons/fi'

const Season = () => {
  const { id } = useParams();
  const [seasons, setSeasons] = useState([]);
  const [show, setShow] = useState({})


  useEffect(() => {
    const getId = async () => {
      try {
        const response = await getShow(id)
        setShow(response)
        setSeasons(response.seasons)
      } catch (error) {
        console.error("erro:", error);        
      }
    };
    getId();
  })

  return(
    <div className="season-info">
      <div className="button-image">
        <Link to={`/show/${id}`}>
          <button className="btn-back">
            <FiArrowLeftCircle size={40} color="rgba(255, 255, 255, 1)"/>
          </button>
        </Link>      
        <img 
          className="img-in"
          src={`https://image.tmdb.org/t/p/w300${show.poster_path}`}
          alt={`${show.name} poster`}
        />
      </div>
      <div className="name-seasons">
        <h3>{show.name}</h3> 
        <h4>Seasons:</h4>
        {seasons.map((season) => (
          <div
            className="season"
            key={season.season_number}
          >
            <Link to={`/show/${id}/seasons/${season.season_number}`}>
            <p>{season.season_number}</p>
            </Link>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Season;