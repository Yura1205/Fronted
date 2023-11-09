import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css";
 // Importa el archivo CSS para los estilos de registro
import logo from '../../components/Logo.png'; // Reemplaza con la ruta correcta de tu logo
import background from '../../assets/camara.jpg'; // Ruta de tu imagen de fondo

const RegisterPage = () => {
    return (
        <div className="main" style={{ backgroundImage: `url(${background})` }}>
            <div className="cardmain">
                <div className="cardinfo">
                    <div className="logo">
                        <img src={logo} alt="Logo" style={{ width: '100px' }} />
                    </div>
                    <h1>Registrarse</h1>
                    <p>Ingresa tus datos para registrarte.</p>
                </div>
                <div className="cardform">
                    <form>
                        <div className="formGroup">
                            <label htmlFor="firstName">Nombres:</label>
                            <input type="text" id="firstName" name="firstName" />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="lastName">Apellidos:</label>
                            <input type="text" id="lastName" name="lastName" />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="email">Correo:</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="username">Usuario:</label>
                            <input type="text" id="username" name="username" />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="password">Contraseña:</label>
                            <input type="password" id="password" name="password" />
                        </div>
                        
                        <Link to="/servicios" className="btn btn-square registerButton" type="submit">
                            Registrarse
                        </Link>
                    </form>
                    <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link></p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
