import React from 'react';
import { Link } from 'react-router-dom';
import {BsCloudSun} from "react-icons/bs";
import {BiHomeAlt2} from "react-icons/bi";
import './Dashboard.css'
export default function ListaApis() {
  return (
    <div>
        <ul className='lista-apis'>
          <Link to='/dashboard'>
            <li className='home-api'>
              
                Home
              
              <BiHomeAlt2/>
            </li>
          </Link>
          <Link to='/dashboard/api-weather'>
            <li className='weather-api'>
              
                Estado del tiempo
              
              <BsCloudSun/>
            </li>
          </Link>
        </ul>
    </div>
    
  )
}
