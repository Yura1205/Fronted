import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Bar() {
    const navigate = useNavigate();

    return (
        <div className='bg-gray-800'>
            <div className="container mx-auto py-3">
                <div className='flex items-center justify-between'>
                    <div>
                        <Link to="/">
                            <img src="tu_logo.png" alt="Logo" className="h-8" />
                        </Link>
                    </div>
                    <nav className='flex items-center'>
                        <ul className="menu flex items-center justify-center gap-5">
                            <li>
                                <Link to="/" className="link">Inicio</Link>
                            </li>
                            <li>
                                <Link to="/servicios" className="link">Servicios</Link>
                            </li>
                            <li>
                                <Link to="/guide" className="link">Guía</Link>
                            </li>
                            <li>
                                <Link to="/login" className="link">Iniciar Sesión</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Bar;



