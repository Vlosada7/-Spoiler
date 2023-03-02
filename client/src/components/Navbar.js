import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './Navbar.css'
import Home from './Home';
import Discovery from './Discovery';

// const Navbar = () => {
//   return (
//     <div className='navbar'>
//       <ul className='menu'>
//         <li>
//           <a className='current' href='/home'>HOME</a>
//         </li>
//         <li>
//           <a className='current' href='discovery'>DISCOVERY</a>
//         </li>
//         <li>
//           <a className='current' href='categories'>CATEGORIES</a>
//         </li>
//         <li>
//           <a className='current' href='surprise-me'>SURPRISE-ME</a>
//         </li>
//         <li>
//           <a className='current' href='profile'>PROFILE</a>
//         </li>
//       </ul>
//     </div>
//   )
// }

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='menu'>
        <li>
          <Link to='/home'>HOME</Link>
        </li>
        <li>
          <Link to='/discovery'>DISCOVERY</Link>
        </li>
        <li>
          <Link to='/categories'>CATEGORIES</Link>
        </li>
        <li>
          <Link to='/surprise-me'>SURPRISE-ME</Link>
        </li>
        <li>
          <Link to='/profile'>PROFILE</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;