import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFindShow } from '../../ApiService';

const SearchResults = () => {
  const [newSearch, setNewSearch] = useState({
    query: ''
  });
  const [show, setShow] = useState({});
  const [showResults, setShowResults] = useState(false);

  function handleSubmit() {
    const str = newSearch.query;
    const newQuery = str.replace(/\s+/g, '%20');
    const findQuery = async () => {
      try {
        const response = await getFindShow(newQuery);
        setShow(response.results);
        setShowResults(true);
        console.log(response.results)
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

    // <div className='search-results'>
    //   <ul>
    //     {results.map((result, index) => (
    //       <li key={index}>
    //         <Link to={`/show/${result.id}`}>
    //           <img 
    //             className='img-search'
    //             src={`https://image.tmdb.org/t/p/w300${result.poster_path}`}
    //             alt={`${result.name} poster`}
    //           />
    //           <span>{result.name}</span>
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default SearchResults;



/*

import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = ({ results }) => {
  return (
    <div className='search-results'>
      <ul>
        {results.map((result, index) => (
          <div key={index}>
            <ul>
              <li>
                <Link to={`/show/${result.id}`}>
                  <img 
                    className='img-search'
                    src={`https://image.tmdb.org/t/p/w300${result.poster_path}`}
                    alt={`${result.name} poster`}
                  />
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
*/
/*

{/* {results.map((result, index) => (
          <Link to={`/show/${show.id}`}>
            <li key={index}>{result.name}</li>
          )))}
          </Link>
      </ul>
    </div>
    </> }

*/