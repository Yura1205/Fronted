// Pagina3.js
import React from 'react';
import { Button } from '@mui/material';
import { DashboardNav } from '../../components/DashboardNav';
import Footer from '../../components/Footer';
import Image3 from '../../assets/image3.jpeg';

const Pagina3 = () => {
    const customButtonStyles = {
        button: {
            backgroundColor: '#8B4513', // Color marrón pastel
            color: 'white',
            borderRadius: '20px', // Fondo ovalado
            padding: '8px 16px', // Espaciado interno del botón
            fontFamily: 'Comic Sans MS, sans-serif',
        },
    };

    return (
        <>
            <DashboardNav />
            <section>
                <div>
                    <h1>SERVICIOS DE TURISMO EN MEDELLÍN</h1>
                </div>
            </section>

            <section>
                <img src={Image3} alt="Medellin metrocable" />
                <div>
                    <h2>Medellin metrocable</h2>
                    <p>
                        Un emocionante viaje en teleférico con vistas a la ciudad.
                        <br />
                        Precio: $120 COP
                    </p>
                    <Button style={customButtonStyles.button}>RESERVAR</Button>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Pagina3;
