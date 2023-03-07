import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getFindShow } from '../../ApiService';
import { isEmpty } from "lodash";

const SearchResults = () => {
  const [newSearch, setNewSearch] = useState({
    query: ''
  });
  const [showResults, setShowResults] = useState({});

  function handleSubmit() {
    const str = newSearch.query;
    const newQuery = str.replace(/\s+/g, '%20');
    const findQuery = async () => {
      try {
        const response = await getFindShow(newQuery);
        setShowResults(response.results);
      } catch (error) {
        console.error(error);
      }
    };
    findQuery();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNewSearch({ ...newSearch, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    handleSubmit();
    setNewSearch({
      query: ''
    });
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleFormSubmit(event);
    }
  }
    return (
      <div>
        {isEmpty(showResults) ? (
          <div>
            <p>Search for your favorite tv show:</p>
            <form onSubmit={handleFormSubmit}>
                <input
                  type='text'
                  name='query'
                  onKeyDown={handleKeyDown}
                  value={newSearch.query}
                  onChange={handleChange}
                />
                <button type='submit'>Search</button>
              </form>
          </div>
        ): (
          showResults.some((show) => show.poster_path) ? (
            <div>              
              {showResults.map((show) => (
                show.poster_path && (
                  <div
                    className='show'
                    key={show.id}
                    >
                    <Link to={`/show/${show.id}`}>
                      <img
                        className="img-out"
                        src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                        alt={`${show.name} poster`}
                      />
                    </Link>
                  </div>
                )
              ))}
            </div>
          ) : (
            <p>No results found.</p>
          )
        )}
        
      </div>
    );
    
};

export default SearchResults;



