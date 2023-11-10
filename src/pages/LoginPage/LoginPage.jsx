import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import style from "./style.module.css";
import fondoPantalla from '../../assets/vista-superior-manos-sosteniendo-telefono-inteligente.jpg';
import userIcon from '../../assets/user.svg';
import passwordIcon from '../../assets/password.svg';
import logo from '../../components/Logo.png'; 

export const LoginPage = () => {
    const navigate = useNavigate(); // hook de react-router-dom para la navegación
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const backgroundStyle = {
        backgroundImage: `url(${fondoPantalla})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    };

    const handleLogin = () => {
        // Verificar si el usuario y la contraseña no están vacíos
        if (!username || !password) {
            Swal.fire({
                icon: 'error',
                title: 'Error de inicio de sesión',
                text: 'Por favor, ingresa tu usuario y contraseña.',
            });
        } else {
            // Aquí puedes realizar la lógica de autenticación
            // Por ahora, simplemente mostraremos la SweetAlert y redireccionaremos.
            Swal.fire({
                icon: 'success',
                title: 'Inicio de sesión exitoso. ¡Ya puedes ver todos nuestros servicios!',
                showConfirmButton: false,
                timer: 1500 // Muestra la alerta durante 1.5 segundos
            });

            // Después de mostrar la alerta, redirige al usuario a la página de servicios después de un breve retraso.
            setTimeout(() => {
                navigate('/servicios');
            }, 1500);
        }
    };

    return (
        <div>
            <div className={style.main} style={backgroundStyle}>
                <div className={style.cardmain}>
                    <div className={style.cardinfo}>
                        <div className={style.logo}>
                            <img src={logo} alt="Logo" style={{ width: '100px' }} />
                        </div>
                        <h1>Iniciar sesión</h1>
                        <p style={{ fontSize: '14px', color: '#549bb9' }}>
                            Ingresa tus datos para seguir explorando ofertas y más...
                        </p>
                    </div>
                    <div className={style.cardform}>
                        <div className={style.input_user}>
                            <img src={userIcon} alt="user" />
                            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className={style.input_pass}>
                            <img src={passwordIcon} alt="password" />
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button onClick={handleLogin} className={`${style.btn} ${style['btn-square']}`}>
                            Login
                        </button>
                        
                        <Link to="/register" className={`${style['btn-register']} ${style['btn-square']}`}>
                            Registrarse
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
