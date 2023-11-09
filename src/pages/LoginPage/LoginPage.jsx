import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link
import style from "./style.module.css";
import fondoPantalla from '../../assets/vista-superior-manos-sosteniendo-telefono-inteligente.jpg';
import userIcon from '../../assets/user.svg';
import passwordIcon from '../../assets/password.svg';
import logo from '../../components/Logo.png'; 


export const LoginPage = () => {
    const backgroundStyle = {
        backgroundImage: `url(${fondoPantalla})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
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
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className={style.input_pass}>
                            <img src={passwordIcon} alt="password" />
                            <input type="password" placeholder="Password" />
                        </div>
                        <button className={`${style.btn} ${style['btn-square']}`}>Login</button>
                        
                        <Link to="/register" className={`${style['btn-register']} ${style['btn-square']}`}>Registrarse</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoginPage;
