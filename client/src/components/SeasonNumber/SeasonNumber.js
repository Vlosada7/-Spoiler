import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShow } from "../../ApiService";

const SeasonNumber = () => {
  const { id, seasonId } = useParams();
  const [show, setShow] = useState([])
  console.log(id)
  console.log(seasonId)

  useEffect(() => {
    const getId = async () => {
      try {
        const response = await getShow(id)
        setShow(response.seasons.seasonId)
        console.log(response.seasons.season_number)
      } catch (error) {
        console.error('Error: ', error);
      }
    };
    getId();
  })
};

export default SeasonNumber; 