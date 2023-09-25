import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importa Routes y Route
import HomeDashboard from './Componentes/Home/Home.js';
import Dashboard from './Componentes/Dashboard/Dashboard.js';
import CondicionAtmosferica from './Componentes/CondicionAtmosferica/CondicionAtmosferica.js';

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard promp={<HomeDashboard/>}/>}/>
        <Route path="/dashboard/api-weather" element={<Dashboard promp={<CondicionAtmosferica/>}/>}/>
      </Routes>
    </>
  );
}

export default AppRouter;
