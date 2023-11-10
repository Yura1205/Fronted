import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import "./Register.css";
import logo from '../../components/Logo.png';
import background from '../../assets/camara.jpg';

const RegisterPage = () => {
    const handleRegister = (event) => {
        event.preventDefault();

        // Verificar si todos los campos están llenos
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const email = event.target.email.value;
        const username = event.target.username.value;
        const password = event.target.password.value;

        if (!firstName || !lastName || !email || !username || !password) {
            // Mostrar SweetAlert indicando que no se pudo registrar debido a campos faltantes
            Swal.fire({
                icon: 'error',
                title: 'Error al registrarse',
                text: 'Por favor, completa todos los campos para registrarte.',
            });
        } else {
            // Mostrar SweetAlert indicando que se registró exitosamente
            Swal.fire({
                icon: 'success',
                title: 'Registro exitoso',
                text: 'Te has registrado correctamente.',
            }).then(() => {
                // Puedes redirigir al usuario aquí si es necesario
                // window.location.href = "/servicios";
            });
        }
    };

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
                    <form onSubmit={handleRegister}>
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
                        
                        <button className="btn btn-square registerButton" type="submit">
                            Registrarse
                        </button>
                    </form>
                    <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link></p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
