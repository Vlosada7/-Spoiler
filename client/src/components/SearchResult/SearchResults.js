// import React from 'react';
// import { Link } from 'react-router-dom';

// const SearchResults = ({ results }) => {
//   return (
//     <div className='search-results'>
//       <ul>
//         {results.map((result, index) => (
//           <li key={index}>
//             <Link to={`/show/${result.id}`}>
//               <img 
//                 className='img-search'
//                 src={`https://image.tmdb.org/t/p/w300${result.poster_path}`}
//                 alt={`${result.name} poster`}
//               />
//               <span>{result.name}</span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchResults;



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