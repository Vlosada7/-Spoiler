import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShow } from "../../ApiService";
import './Season.css'
import { Link } from "react-router-dom";

const Season = () => {
  const { id } = useParams();
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    const getId = async () => {
      try {
        const response = await getShow(id)
        setSeasons(response.seasons)
        console.log(response.seasons)
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
      {seasons.map((season) => (
        <div
          className="season"
          key={season.season_number}
          onClick={() => handleClick(season.id)}
        >
          <Link to={`/show/${id}/seasons/${season.id}`}>
          <p>{season.season_number + 1}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Season;