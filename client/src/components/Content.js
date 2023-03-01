import React from 'react';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import './Content.css'

const Content = () => {
  return (
    <div className='content'>
        <Navbar/>
        <Dashboard/>
    </div>
    
  )
}

export default Content;