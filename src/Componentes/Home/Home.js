import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { BsCloudSun } from "react-icons/bs";
import { BiHomeAlt2 } from "react-icons/bi";

const Home = () => {
  return (
        <>
          <div>
            <h1 className=' font-bold text-4xl'>Bienvenido</h1>
            <h2 className='text-start mt-10'>Integrantes:</h2>
            <ul className='text-start mb-10'>
              <li>
                Kevin Alexis Bello Maldonado
              </li>
              <li>
                Fernando Alberto Villafaña Alfonseca
              </li>
              <li>
                Miguel Angel Ortega Mazun
              </li>
            </ul>
          </div>

          <div>
            <h2 className=' text-4xl font-bold'>APIs</h2>
            <Link to='/dashboard/api-weather'>
          <div style={{backgroundColor:'rgb(0, 106, 255)'}} className=' w-60 h-12 rounded-md flex items-center justify-center my-10' >
            <BsCloudSun className='icon-weathe text-white mx-2 ' />
            <p className=' text-white'>Estado del tiempo</p>
          </div>
        </Link>
          </div>
        </>

  );
};

export default Home;
