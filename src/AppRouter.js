import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importa Routes y Route
import EstadoTiempo from './Routes/EstadoTiempo/EstadoTiempo.js';
import Inicio from './Routes/Home/Inicio.js'

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/dashboard/api-weather" element={<EstadoTiempo/>}/>
      </Routes>
    </>
  );
}

export default AppRouter;
