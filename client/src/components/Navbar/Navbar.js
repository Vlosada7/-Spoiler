import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { SignOutButton } from '@clerk/clerk-react';


const Navbar = () => {


  return (
    <div className='navbar'>
      <ul className='menu'>
        <li>
        <Link to={`/home`}>HOME</Link>
        </li>
        <li>
          <Link to='/discovery'>DISCOVERY</Link>
        </li>
        <li>
          <Link to='/categories'>CATEGORIES</Link>
        </li>
        {/* <li>
          <Link to='/surprise-me'>SURPRISE-ME</Link>
        </li> */}
        <li>
          <Link to='/search'>SEARCH</Link>
        </li>
        <li>
          <SignOutButton/>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;