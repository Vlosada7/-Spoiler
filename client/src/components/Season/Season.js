import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShow } from "../../ApiService";
import './Season.css'
import { Link } from "react-router-dom";

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

  function handleClick(id) {
    console.log(id);
  }
  return(
    <div className="seasons-list">
      <Link to={`/show/${id}`}>
        <button>Back</button>
      </Link>      
      <div>
        <h3>{show.name} Seasons:</h3>
        
      </div>
      {seasons.map((season) => (
        <div
          className="season"
          key={season.season_number}
          onClick={() => handleClick(season.id)}
        >
          <Link to={`/show/${id}/seasons/${season.season_number}`}>
          <p>{season.season_number}</p>
          </Link>
        </div>
      ))}
      
    </div>
  )
}

export default Season;