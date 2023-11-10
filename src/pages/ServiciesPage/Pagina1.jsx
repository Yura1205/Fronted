import React from 'react';
import { Button } from '@mui/material';
import { DashboardNav } from '../../components/DashboardNav';
import Footer from '../../components/Footer';
import Image1 from '../../assets/image1.jpeg';
import Swal from 'sweetalert2'; // Importa SweetAlert2
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom

const Pagina1 = () => {
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
    };

    const navigate = useNavigate(); // Utiliza useNavigate para la redirección

    const handleReserveClick = () => {
        // Muestra la alerta usando SweetAlert2
        Swal.fire({
            title: '¡PERFECTO WALTER!',
            text: 'HAS ELEGIDO UN LUGAR INCREÍBLE',
            icon: 'success',
            confirmButtonText: 'OK',
        }).then(() => {
            // Redirige a la ruta "/guide"
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
                <img src={Image1} alt="Pueblo de Guatapé" style={customStyles.image} />
                <div>
                    <h2>Pueblo de Guatapé</h2>
                    <p>
                        Guatapé es un hermoso pueblo colombiano conocido por su arquitectura colorida y vibrante, así como por el famoso embalse que lo rodea. Aquí tienes información sobre Guatapé, los lugares para comer y los ferris:
                    </p>
                    <p>
                        Pueblo de Guatapé:
                        Guatapé es reconocido por la Piedra del Peñol, una enorme formación rocosa que ofrece una vista impresionante del embalse y sus alrededores. Algunas actividades y lugares de interés en Guatapé incluyen:
                    </p>
                    <p>
                        Piedra del Peñol: Una atracción icónica que ofrece una vista panorámica de la región. Subir los más de 700 escalones hasta la cima vale la pena por las impresionantes vistas.
                    </p>
                    <p>
                        Malecón de Guatapé: Un pintoresco malecón a lo largo del embalse con coloridos murales que representan la vida y la cultura de la región.
                    </p>
                    <p>
                        Paseo en Barco por el Embalse: Puedes disfrutar de un relajante paseo en barco por el embalse para apreciar la belleza del paisaje.
                    </p>
                    <p>
                        Lugares para Comer:
                        Guatapé cuenta con una variedad de opciones para comer, que van desde restaurantes locales hasta opciones más turísticas. Algunos lugares recomendados son:
                    </p>
                    <p>
                        Restaurante La Fogata: Ofrece platos colombianos auténticos con una hermosa vista al embalse.
                    </p>
                    <p>
                        Restaurante Los Olivos: Conocido por su cocina colombiana y vistas al embalse.
                    </p>
                    <p>
                        Café de Los Sueños: Ideal para aquellos que buscan opciones de café y postres.
                    </p>
                    <p>
                        Ferris y Transporte:
                        El transporte acuático en Guatapé generalmente se realiza a través de pequeños barcos y ferris que te llevan a explorar el embalse. Los precios pueden variar, y es recomendable preguntar localmente o en tu lugar de alojamiento para obtener información actualizada.
                    </p>
                    <p>
                        Recuerda que la información puede cambiar, y siempre es aconsejable verificar los detalles actuales antes de planificar tu visita. ¡Espero que disfrutes de tu tiempo en Guatapé!
                    </p>
                    <Button style={customStyles.button} onClick={handleReserveClick}>
                        RESERVAR
                    </Button>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Pagina1;
