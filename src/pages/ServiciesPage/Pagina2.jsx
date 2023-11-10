// Pagina2.js
import React from 'react';
import { Button } from '@mui/material';
import { DashboardNav } from '../../components/DashboardNav';
import Footer from '../../components/Footer';
import Image2 from '../../assets/image2.jpeg';

const Pagina2 = () => {
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
                <img src={Image2} alt="Guatape" />
                <div>
                    <h2>Guatape</h2>
                    <p>
                        Explora este pintoresco pueblo con vistas panorámicas impresionantes.
                        <br />
                        Precio: $150 COP
                    </p>
                    <Button style={customButtonStyles.button}>RESERVAR</Button>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Pagina2;
