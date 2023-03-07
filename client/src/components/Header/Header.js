import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { getFindShow } from '../../ApiService';
import SearchResults from '../SearchResult/SearchResults';

const Header = () => {
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

  function handleClick(id) {
    console.log(id)
  }

  return (
    <>
      <div className='header'>
        <h3>!Spoiler</h3>
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
      {showResults && (
        <div className='search-results'>
          <button onClick={() => setShowResults(false)}>X</button>
          
          <ul>
            {show.map((result) => (
              <div
                key={result.id}
                className='list-result'
                onClick={()=> handleClick(result.id)}
              >
                  <li>
                  {result.name}
                  </li>
              </div>
            ))}
          </ul>
          
        </div>
      )}
    </>
  );
};

export default Header;