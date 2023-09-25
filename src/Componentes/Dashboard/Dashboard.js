import React from 'react'
import "./Dashboard.css"
import Navbar from '../Navbar/Navbar.js';

const Dashboard = ({promp}) => {
  return (
    <div className='dashboard-container'>
      <div className='contenedor-navbar'> 
        <h2>APIs</h2>
        <Navbar/>
      </div>

      <div className='api-content'>
          {promp}
      </div>
    </div>
  )
}

export default Dashboard
