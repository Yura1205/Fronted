import React from 'react';
import { Button } from '@mui/material';
import { DashboardNav } from '../../components/DashboardNav';
import Footer from '../../components/Footer';
import Image3 from '../../assets/image3.jpeg';
import Swal from 'sweetalert2'; // Importa SweetAlert2
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom

const Pagina3 = () => {
    const customStyles = {
        section: {
            padding: '5rem 5rem 0rem 5rem',
            marginBottom: '2rem',
            textAlign: 'center',
        },
        sectionText: {
            padding: '1rem 5rem 0rem 5rem',
            marginBottom: '2rem',
            textAlign: 'justify',
        },
        button: {
            backgroundColor: '#8B4513', // Color marrón pastel
            color: 'white',
            borderRadius: '20px', // Fondo ovalado
            padding: '8px 16px', // Espaciado interno del botón
            fontFamily: 'Comic Sans MS, sans-serif',
            display: 'block',
            margin: '0 auto', // Centra el botón
            marginTop: '1rem', // Espaciado superior
        },
        image: {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '50%',
        },
        metroTitle: {
            color: '#004445', // Color de la línea del metro
        },
    };

    const navigate = useNavigate(); // Utiliza useNavigate para la redirección

    const handleReserveClick = () => {
        // Muestra la alerta usando SweetAlert2 con un mensaje de turismo
        Swal.fire({
            title: '¡Reserva Exitosa!',
            text: 'Gracias por elegirnos para tu experiencia de turismo. ¡Esperamos que disfrutes tu visita!',
            icon: 'success',
            confirmButtonText: 'OK',
        }).then(() => {
            // Redirige a la ruta "/pagina3"
            navigate('/guide');
        });
    };

    return (
        <>
            <DashboardNav />
            <section style={customStyles.section}>
                <div>
                    <h1>SERVICIOS DE TURISMO EN MEDELLÍN</h1>
                </div>
            </section>

            <section style={customStyles.sectionText}>
                <img src={Image3} alt="Medellin metrocable" style={customStyles.image} />
                <div>
                    <h2 style={customStyles.metroTitle}>Medellin metrocable</h2>
                    <p>
                        Guatapé es un hermoso pueblo colombiano conocido por su arquitectura colorida y vibrante,
                        así como por el famoso embalse que lo rodea. Aquí tienes información detallada sobre el Metrocable:
                    </p>
                    <p>
                        <span style={customStyles.metroTitle}>¿Qué es el Metrocable?</span>
                        <br />
                        El Metrocable es un sistema de teleférico utilizado para el transporte público masivo de pasajeros.
                        Consiste en cabinas que se desplazan suspendidas de cables aéreos, conectando diferentes áreas de la ciudad
                        a través de rutas elevadas. En el caso de Medellín, el Metrocable ha sido una solución innovadora para
                        conectar zonas de difícil acceso en las montañas circundantes.
                    </p>
                    {/* ... (continúa con la información del Metrocable) */}
                    <p>
                        <span style={customStyles.metroTitle}>Tarifas y Horarios</span>
                        <br />
                        Las tarifas del Metrocable suelen estar integradas con el sistema de transporte masivo de la ciudad.
                        Los horarios de operación varían, pero generalmente siguen el horario del metro.
                    </p>
                    <p>
                        <span style={customStyles.metroTitle}>Consideraciones</span>
                        <br />
                        Es importante verificar la información actualizada sobre tarifas, horarios y rutas, ya que estos pueden
                        cambiar. Además, ten en cuenta que el Metrocable es parte integral del sistema de transporte público de
                        Medellín y requiere una tarjeta de transporte público para acceder.
                    </p>
                    {/* Fin de la información del Metrocable */}
                    <Button style={customStyles.button} onClick={handleReserveClick}>
                        RESERVAR
                    </Button>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Pagina3;
