import React, { useEffect, useState } from 'react';
import { Route, useParams } from 'react-router-dom';
import { findByCat } from '../ApiService';
import { Link } from 'react-router-dom';
import './Categorie-selected.css'

const CategorieSelected = () => {
  const [categorie, setCategorie] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getShowsbyCat = async () => {
      try {
        const response = await findByCat(name);
        setCategorie(response.results);
      } catch (error) {
        console.error('Erro ao fazer requisição: ', error);
      }
    }
    getShowsbyCat();
  }, []);

  function handleClick(showId) {
    // Navegue para a página do filme
    // getShow(showId);
    console.log(showId);
    // history.push(`/filme/${movieId}`);
  
  }

  return (
    <div>
      <p>{name}</p>
      <div className="shows-list">
        {categorie.map(show => {
          if (!show.poster_path) {
            return null;
          }
          return (
            <div className="show" key={show.id} onClick={() => handleClick(show.id)}>
              <Link to={`/show/${show.id}`}>
                <img className='img-out' src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={`${show.name} poster`} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
  

};

export default CategorieSelected;