import React from 'react';
import './Dashboard.css';
import ListaApis from './ListaApis.js';

const HomeDashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className='contenedor-lista-apis'>
        <h2>APIs</h2>
        <ListaApis fragua={true} />
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
              <p>Fernando Alberto Villafaña Alfonseca</p>
            </li>
            <li>
              <p>Miguel Angel Ortega Mazun</p>
            </li>
          </ul>
        </div>

        <div>
          <h2>APIs y SOA</h2>
          <p>
            En esta aplicación, utilizamos APIs (Application Programming Interfaces) y SOA
            (Service-Oriented Architecture) para obtener datos meteorológicos en tiempo real.
            Las APIs nos permiten acceder a servicios externos, como la API de condiciones
            atmosféricas que usamos para proporcionar información actualizada sobre el clima
            en diferentes estados de México.
          </p>
          <img src='https://quintagroup.com/services/service-images/api.jpg' alt='SOA' width='400px' className='image'/>
          
          <p>
            La arquitectura SOA se basa en el principio de dividir las funcionalidades de una
            aplicación en servicios independientes que pueden ser consumidos de manera modular.
            Esto nos permite mantener nuestra aplicación escalable y flexible al interactuar
            con múltiples APIs y servicios externos de manera eficiente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
