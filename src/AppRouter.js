import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importa Routes y Route
import HomeDashboard from './Componentes/HomeDashboard.js';
import Dashboard from './Componentes/Dashboard.js';

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeDashboard/>}/>
        <Route path="/dashboard/api-weather" element={<Dashboard/>}/>
      </Routes>
    </>
  );
}

export default AppRouter;
