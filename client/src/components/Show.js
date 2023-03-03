import React, { useEffect, useState } from 'react';
import { getFavs, getShow, deleteShow } from '../ApiService';
import { Route, useParams } from 'react-router-dom';
import './Show.css';
import Checkbox from './Checkbox';
import moment from 'moment';
import { saveShow } from '../ApiService';


const Show = () => {

  const [show, setShow] = useState({});
  const { id } = useParams();
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxClick() {
    setIsChecked(!isChecked);
    const date = moment(Date.now());
    const formattedDate = date.format('DD/MM/YYYY HH:mm');
    const info = {
      id: show.id, 
      addedAt: formattedDate
    }
    saveShow(info);
  }

  useEffect(() => {
    const check = async () => {
      try {
        const response = await getFavs();
        const isIncluded = response.find(show => show.id === id);
        if (isIncluded) {
          setIsChecked(true);
        }
      } catch (error) {
        console.error('Erro: ', error);
      }
    }
    check();
  });

  useEffect(() => {
    getShow(id)
    .then(res => {
      setShow(res);
    })
  })

  function handleClick (showid) {
    console.log(showid)
    const info = {
      id: show.id, 
    }
    console.log(info);
    deleteShow(info);
  }

  return (
    <div className='info'>
      <div className='titulo-imagem'>
        <img className='img-inside' src={`https://image.tmdb.org/t/p/w300${show.poster_path}`} alt={`${show.name} poster`} />
        <div className='nome-desc'>
            <p>Ja assistiu?</p>
            <Checkbox id="myCheckbox" onClick={handleCheckboxClick} checked={isChecked ? true : false} />
            <br></br>
            <button onClick={() => handleClick(show.id)}>DELETE</button>
            <h3>{show.name}</h3>
            <p>{show.overview}</p>
        </div>
      </div>
      <div>
        <br></br>
        <button>Seasons: {show.number_of_seasons}</button>
        <button>Episodeos: {show.number_of_episodes}</button>
      </div>
      <div>
        <br></br>
        <button>Reviews:</button>
        
      </div>
    </div>
  )
}

export default Show; 