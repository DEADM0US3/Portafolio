import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsCloudSun } from "react-icons/bs";
import { BiHomeAlt2 } from "react-icons/bi";
import './Navbar.css'

function Navbar({ value }) {

  console.log(value)

  return (
    <nav>
      <ul className='lista-apis'>
        <Link to="/">
          <li className={`home-api ${value == 'home' ? 'selected' : ''}`}>
            <BiHomeAlt2 className='icon-home' />
            Inicio
          </li>
        </Link>
        <Link to='/dashboard/api-weather'>
          <li className={`home-api ${value == 'weather' ? 'selected' : ''}`}>
            <BsCloudSun className='icon-weather' />
            Estado del tiempo
          </li>
        </Link>
      </ul>
    </nav>

  )
}

export default Navbar