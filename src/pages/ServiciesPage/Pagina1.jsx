// Pagina1.js
import React from 'react';
import { Button } from '@mui/material';
import { DashboardNav } from '../../components/DashboardNav';
import Footer from '../../components/Footer';
import Image1 from '../../assets/image1.jpeg';

const Pagina1 = () => {
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
                <img src={Image1} alt="Pueblo de Guatape" />
                <div>
                    <h2>Pueblo de Guatape</h2>
                    <p>
                        Una joya escondida con casas coloridas y una gran roca para escalar.
                        <br />
                        Precio: $100 COP
                    </p>
                    <Button style={customButtonStyles.button}>RESERVAR</Button>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Pagina1;
