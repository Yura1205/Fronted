import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ServiciosPage from './pages/ServiciesPage/ServiciosPage';
import { GuidePage } from './pages/GuidePage/GuidePage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      
    </Router>
  );
}

export default App;
