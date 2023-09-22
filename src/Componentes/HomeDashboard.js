import React from 'react'
import "./Dashboard.css"
import ListaApis from './ListaApis.js';

const HomeDashboard = () => {
  return (

    <div className='dashboard-container'>
      

      <div className='contenedor-lista-apis'> 
        <h2>APIs</h2>
        <ListaApis/>
      </div>

      <div className='api-content'>
        <div>
            <h1>Bienvenido</h1>
            <h2 className='text-start'>Integrantes:</h2>
            <ul className='text-start'>
              <li>
                <p>Kevin Alexis Bello Maldonado</p>
              </li>
              <li>
                <p>Luis Alberto Villafaña Alfonseca</p>
              </li>
              <li>
                <p>Miguel Angel Ortega Mazun</p>
              </li>
            </ul>
            
            
            
        </div>
      </div>
    </div>
  )
}

export default HomeDashboard