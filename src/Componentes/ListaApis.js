import React from 'react';
import { Link } from 'react-router-dom';
import {BsCloudSun} from "react-icons/bs";
import {BiHomeAlt2} from "react-icons/bi";
import './Dashboard.css'
export default function ListaApis() {

  const [selectItem, setSelectItem] = React.useState(null);

  const itemClick = (itemName) => {
    setSelectItem(itemName);
  };

  return (
    <div>
        <ul className='lista-apis'>
          <Link to="/" onClick={() => itemClick('home')}>
            <li className={`home-api ${selectItem === 'home' ?  'selected' : ''}`}>                
              Home
              <BiHomeAlt2/>
            </li>
          </Link>
       
          <Link to='/dashboard/api-weather' onClick={()=> iItemClick('weather')}>
            <li className={`weather-api ${selectItem === 'weather' ?  'selected' : ''}`}>
                Estado del tiempo
              <BsCloudSun/>
            </li>
          </Link>
        </ul>
    </div>
    
  )
}
