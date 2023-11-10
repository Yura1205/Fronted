import React from 'react';
import { Button } from '@mui/material';
import { DashboardNav } from '../../components/DashboardNav';
import Footer from '../../components/Footer';
import Image2 from '../../assets/image2.jpeg';
import Swal from 'sweetalert2'; // Importa SweetAlert2
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom

const Pagina2 = () => {
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
        // Muestra la alerta usando SweetAlert2 con un mensaje personalizado
        Swal.fire({
            title: '¡Reserva Exitosa!',
            text: 'Tu reserva se ha realizado con éxito. ¡Esperamos que disfrutes tu visita!',
            icon: 'success',
            confirmButtonText: 'OK',
        }).then(() => {
            // Redirige a la ruta "/pagina2"
            navigate('/pagina2');
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
                <img src={Image2} alt="Guatape" style={customStyles.image} />
                <div>
                    <h2 style={{ color: '#008000' }}>La Roca de Guatapé</h2>
                    <p style={{ color: '#000000' }}>
                        La Roca de Guatapé, también conocida como el Peñón de Guatapé o simplemente "La Piedra," es una formación rocosa gigantesca ubicada en Guatapé, Colombia. Aquí tienes información detallada sobre este icónico sitio turístico:

                        - Descripción:
                          La Roca de Guatapé es una enorme monolito de granito que se eleva a más de 200 metros de altura. Es una de las formaciones rocosas más grandes del mundo y ofrece una vista panorámica impresionante de la región circundante.

                        - Acceso:
                          Para llegar a la cima, los visitantes deben subir una escalera empotrada en una de las grietas naturales de la roca. La escalera cuenta con más de 700 escalones y proporciona una experiencia única mientras asciendes hacia la cima.

                        - Vistas desde la Cima:
                          Desde la cima de La Roca, puedes disfrutar de vistas espectaculares del embalse de Guatapé y las verdes colinas que rodean la zona. La belleza del paisaje hace que el esfuerzo de subir valga completamente la pena.

                        - Historia y Leyendas:
                          La Roca de Guatapé tiene una historia interesante y está asociada con varias leyendas locales. Se cree que la roca fue utilizada por los indígenas Tahamíes en la antigüedad para rituales. Además, hay grabados en la base de la roca que cuentan historias y simbolismos.
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

export default Pagina2;
