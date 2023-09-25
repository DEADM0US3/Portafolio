import React from 'react';
import { Link } from 'react-router-dom';
import {BsCloudSun} from "react-icons/bs";
import {BiHomeAlt2} from "react-icons/bi";
import './Navbar.css'

export default function ListaApis() {

  const [selectItem, setSelectItem] = React.useState('home');

  const itemClick = (itemName) => {
    setSelectItem(itemName);
  };

  return (
    <nav>
        <ul className='lista-apis'>
          <Link to="/" onClick={() => itemClick('home')}>
            <li className={`home-api ${selectItem == 'home'    ?  'selected' : ''}`}>                
                  <BiHomeAlt2 className='icon-home'/>
                  Inicio
            </li>
          </Link>
          <Link to='/dashboard/api-weather' onClick={()=> itemClick('weather')}>
            <li className={`weather-api ${selectItem == 'weather' ?  'selected' : ''}`}>
                <BsCloudSun className='icon-weather'/>
                  Estado del tiempo                 
            </li>
          </Link>
        </ul>
    </nav>
    
  )
}
