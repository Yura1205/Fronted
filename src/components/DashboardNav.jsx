import React from 'react'
import Logo from './Logo.png'
import '../styles/navbar.css'
import { NavLink } from 'react-router-dom'

export const DashboardNav = () => {
  return (
    <>
    <header>
        <img className="logo" src={Logo}/>
        <nav className="navigation">
            <NavLink to= "/">Inicio</NavLink>
            <NavLink to="/servicios">Servicios</NavLink>
            <NavLink to="/guide">Guía</NavLink>
            <NavLink to="/login">Iniciar sesion</NavLink>
        </nav>
    </header>
    </>
  ) 
}
