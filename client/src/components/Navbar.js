import React from 'react';
import { Link } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='menu'>
        <li>
          <a className='current' href='#'>HOME</a>
        </li>
        <li>
          <a className='current' href='#'>DISCOVERY</a>
        </li>
        <li>
          <a className='current' href='#'>CATEGORIES</a>
        </li>
        <li>
          <a className='current' href='#'>SURPRISE-ME</a>
        </li>
        <li>
          <a className='current' href='#'>PROFILE</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;