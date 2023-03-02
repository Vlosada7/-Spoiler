import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Dashboard.css';
import Home from './Home';
import Discovery from './Discovery';
import Navbar from './Navbar';

// const Dashboard = () => {
//   return (
//     <div className='dashboard'>
//       <Discovery/>
//       {/* <Routes>
//         <Route
//           path ='/home'
//           element={<Home/>}
//         />
//         <Route 
//           path='/discovery'
//           element={<Discovery/>}
//         />
//       </Routes> */}
//     </div>
//   )
// }

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Routes>
        
        <Route path='/home' element={<Home/>} />
        <Route path='/discovery' element={<Discovery />} />
        {/* <Route path='/categories' element={<Categories />} />
        <Route path='/surprise-me' element={<SurpriseMe />} />
        <Route path='/profile' element={<Profile />} /> */}
      </Routes>
    </div>
  )
}

export default Dashboard;