import React, { useEffect } from 'react';
import Swal from 'sweetalert2'; // Importa SweetAlert2
import { DashboardNav } from '../../components/DashboardNav';
import { MapComponent } from '../../components/MapComponent';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../../components/Footer';

const customStyles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
    },
    h1: {
        textTransform: "uppercase",
        fontFamily: "Arial, sans-serif",
        fontSize: "28px",
        marginBottom: "0.5rem",
    },
    h2: {
        fontFamily: "Arial, sans-serif",
        fontSize: "18px",
        marginBottom: "1rem",
    },
    section: {
        padding: "6rem 0 0 0",
        marginBottom: "2rem",
        textAlign: "center",
    },
    img: {
        maxWidth: "100%",
        height: "auto",
    },
    accordion: {
        width: "100%",
        marginBottom: "1rem",
    },
    question: {
        fontWeight: "bold",
        fontSize: "20px",
        textAlign: "center",
    },
    alert: {
        color: 'blue', // Puedes ajustar el color según tus preferencias
        fontSize: '18px',
        marginBottom: '20px',
    },
};

export const GuidePage = () => {
    useEffect(() => {
        // Muestra un mensaje de bienvenida usando SweetAlert2 al cargar la página
        Swal.fire({
            html: '<div style="' + customStyles.alert + '">¡Bienvenido a nuestra guía turística de Medellín! Por favor, lee con atención la información que hemos preparado para ti.</div>',
            icon: 'info',
            confirmButtonText: 'Entendido',
        });
    }, []);
    return (
        <>
            <header>
                <DashboardNav />
            </header>
            <section style={customStyles.section}>
                <div style={customStyles.container}>
                    <h1 style={customStyles.h1}>Turismo Responsable en Medellín</h1>
                    <h2 style={customStyles.h2}>Embárcate en una experiencia única y consciente en Medellín, donde la sostenibilidad y la seguridad van de la mano, y la diversión no tiene límites.</h2>
                </div>
            </section>

            <div style={customStyles.container}>
                <MapComponent />
            </div>

            <section style={customStyles.section}>
                <div style={customStyles.container}>
                    <Accordion style={customStyles.accordion}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={customStyles.question}>¿Qué llevar para la caminata?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Disfrutar de las caminatas en Medellín es una experiencia única para los amantes de la naturaleza y la aventura.
                                La ciudad ofrece una variedad de rutas escénicas que te llevarán a través de exuberantes bosques, cascadas y montañas impresionantes.
                                No olvides llevar ropa cómoda y resistente, calzado adecuado para caminar, una botella de agua, protector solar y repelente de insectos.
                            </p>
                            <p>
                                Además, empaca una cámara para capturar los impresionantes paisajes y no te olvides de respetar el entorno natural y seguir las indicaciones de las autoridades locales.
                                ¡Prepárate para descubrir la belleza de Medellín a pie!
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={customStyles.accordion}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={customStyles.question}>¿Qué hoteles románticos en Medellín tienen buenas vistas?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            En Medellín, el Hotel Mirador ofrece impresionantes vistas de la ciudad y las montañas circundantes.
                        </AccordionDetails>
                    </Accordion>
                    {/* Acordeones adicionales */}
                    <Accordion style={customStyles.accordion}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={customStyles.question}>Cómo cuidar el medio ambiente</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                En Medellín, se fomenta el turismo sostenible a través de campañas de concienciación ambiental. Se insta a los visitantes a recoger su basura y utilizar contenedores adecuados para promover un ambiente limpio.
                            </p>
                            <p>
                                La ciudad cuenta con una gran variedad de parques naturales y reservas, como el Parque Arví, donde se promueve el turismo ecológico. Los turistas pueden aprender sobre la importancia de la conservación y la biodiversidad.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={customStyles.accordion}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={customStyles.question}>Cómo la gente puede cuidar los lugares importantes de Medellín</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                La comunidad de Medellín se involucra activamente en la preservación de monumentos y lugares históricos. Los visitantes pueden contribuir a este esfuerzo al respetar las normas de conservación y no dañar los sitios.
                            </p>
                            <p>
                                En Medellín, existen iniciativas de voluntariado que permiten a los turistas participar en actividades de limpieza y restauración de espacios públicos, como la Comuna 13. Pueden unirse a estas actividades para ayudar a mantener la ciudad hermosa.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    
                    <Accordion style={customStyles.accordion}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={customStyles.question}>Innovación en el transporte público</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Medellín es conocida por su innovador sistema de transporte público, incluyendo el Metro, el Metrocable y los buses eléctricos. Estos sistemas eficientes y sostenibles hacen que la movilidad en la ciudad sea más accesible y amigable con el medio ambiente.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={customStyles.accordion}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={customStyles.question}>Fomento del turismo comunitario</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Medellín ha desarrollado programas de turismo comunitario que permiten a los turistas interactuar con las comunidades locales. Esto no solo enriquece la experiencia del viajero, sino que también contribuye al desarrollo socioeconómico de las áreas menos favorecidas.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={customStyles.accordion}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={customStyles.question}>Promoción de la cultura</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Medellín ofrece una amplia gama de festivales culturales, exposiciones de arte y eventos musicales. Fomentar el turismo cultural y apoyar a los artistas locales es fundamental para el crecimiento de la ciudad como destino turístico.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={customStyles.accordion}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={customStyles.question}>Sostenibilidad y energías renovables</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Medellín está trabajando en la implementación de energías renovables y políticas de sostenibilidad para reducir su huella de carbono. Fomentar el turismo sostenible y promover prácticas amigables con el medio ambiente es esencial para conservar la belleza natural de la región.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={customStyles.accordion}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={customStyles.question}>Accesibilidad universal</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                La ciudad se esfuerza por garantizar que todas las atracciones turísticas sean accesibles para personas con discapacidades. Esto incluye rampas, ascensores y servicios adaptados en museos, parques y transporte público.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={customStyles.accordion}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={customStyles.question}>Seguridad turística</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Medellín ha hecho grandes avances en la mejora de la seguridad para los visitantes. Sin embargo, se recomienda a los turistas seguir las recomendaciones de seguridad y estar atentos a sus pertenencias en lugares concurridos.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={customStyles.accordion}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={customStyles.question}>Participación ciudadana</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Fomentar la participación activa de los ciudadanos en la toma de decisiones relacionadas con el turismo y el desarrollo de la ciudad es fundamental. Las voces de la comunidad deben ser escuchadas para garantizar que el turismo beneficie a todos los residentes y conserve la identidad de Medellín.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </section>
            <Footer/>
        </>
    );
}
