import React from 'react'
import CondicionAtmosferica from './CondicionAtmosferica.js';
import "./Dashboard.css"
import ListaApis from './ListaApis.js';

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      

      <div className='contenedor-lista-apis'> 
        <h2>APIs</h2>
        <ListaApis fragua={false}/>
      </div>

      <div className='api-content'>
          <CondicionAtmosferica/>
      </div>
    </div>
  )
}

export default Dashboard
