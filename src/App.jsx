import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ServiciosPage from './pages/ServiciesPage/ServiciosPage';
import { GuidePage } from './pages/GuidePage/GuidePage';
import Pagina1 from './pages/ServiciesPage/Pagina1';
import Pagina2 from './pages/ServiciesPage/Pagina2';
import Pagina3 from './pages/ServiciesPage/Pagina3';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/pagina1" component={Pagina1} />
        <Route path="/pagina2" component={Pagina2} />
        <Route path="/pagina3" component={Pagina3} />
      </Routes>
      
    </Router>
  );
}

export default App;
