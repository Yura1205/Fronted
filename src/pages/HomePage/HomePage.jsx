import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Indio from '../../assets/image6.jpeg';
import Image1 from '../../assets/1.jpeg';
import Image2 from '../../assets/5.jpeg';
import Image3 from '../../assets/3.jpeg';
import { DashboardNav } from '../../components/DashboardNav';
import Footer from '../../components/Footer';


const logoImage = '../../assets/logo.png';

const customStyles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "800px",
        margin: "0 auto",
    },
    h1: {
        textTransform: "uppercase",
        fontFamily: "Comic Sans MS, sans-serif",
        fontSize: "30px",
        marginBottom: "0.5rem",
    },
    h2: {
        fontFamily: "Comic Sans MS, sans-serif",
        fontSize: "18px",
        marginBottom: "1rem",
        marginRight: "2rem",
    },
    img: {
        maxWidth: "100%",
        height: "auto",
        marginTop: "1rem", 
    },
    section: {
        padding: "6rem  6rem 0rem 6rem",
        textAlign: "center",
    },

    sectionText: {
        padding: "2rem  6rem 1rem 6rem",
        textAlign: "center",
    },

    carouselContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "80%",
        margin: "0 auto",
    },
    carousel: {
        width: "60%",
        marginTop: "1rem",
    },
    carouselImage: {
        maxWidth: "40%",
        height: "auto",
    },
    slogan: {
        fontSize: "38px",
        color: "#1E90FF", 
        textAlign: "center",
        textTransform: "uppercase",
        animation: "move 8s infinite",
    },
    info: {
        fontSize: "20px",
        color: "#000",
        textAlign: "center",
    },
    // eslogan
    '@keyframes move': {
        '0%': {
            transform: 'translateY(0)',
        },
        '50%': {
            transform: 'translateY(20px)',
        },
        '100%': {
            transform: 'translateY(100)',
        },
    },
};

export const HomePage = () => {
    return (
        <div>
            <DashboardNav />
            <section style={customStyles.section}>
                <div style={customStyles.container}>
                    
                    <div>
                        <h1 style={customStyles.h1}>En Colombia el turismo es sostenible</h1>
                        <h2 style={customStyles.h2}>
                            ¡Ven y siente la emoción de explorar la Ciudad de la Eterna Primavera, un destino turístico que te cautivará en cada paso!
                        </h2>
                    </div>
                    <div>
                        <img src={Indio} alt="Turismo Sostenible en Colombia" style ={customStyles.img} />
                    </div>
                </div>
            </section>
            <section style={customStyles.sectionText}>
                <div style={customStyles.container}>
                    <div>
                        <h2 style={customStyles.h2}>
                            Explora los destinos turísticos de Medellín y disfruta de su belleza natural.
                        </h2>
                        <p style={customStyles.h2}>
                            Medellín ofrece a los visitantes una experiencia única gracias a su cálido clima, rica cultura y hermosos paisajes.
                            Con una hospitalidad inigualable, esta ciudad te permite sumergirte en la historia, descubrir la diversidad culinaria
                            y explorar su entorno natural. Venir a turistear a Medellín es una oportunidad de vivir momentos memorables y llevar
                            contigo recuerdos inolvidables.
                        </p>
                    </div>
                </div>
            </section>
            <div style={customStyles.carouselContainer}>
                <Carousel
                    autoPlay
                    showStatus={false}
                    showThumbs={false}
                    dynamicHeight={false}
                    interval={5000}
                    style={customStyles.carousel}
                >
                    <div>
                        <img src={Image1} alt="Imagen 1" style={customStyles.carouselImage} />
                    </div>
                    <div>
                        <img src={Image2} alt="Imagen 2" style={customStyles.carouselImage} />
                    </div>
                    <div>
                        <img src={Image3} alt="Imagen 3" style={customStyles.carouselImage} />
                    </div>
                </Carousel>
            </div>
            <h3 style={customStyles.slogan}>
                ¡Descubre la magia de Medellín!
            </h3>
            <p style={customStyles.info}>
                Medellín te espera con su belleza natural, cultura vibrante y experiencias inolvidables. ¡No te lo pierdas!
            </p>

            <Footer/>

        </div>
        
    );
}

export default HomePage;
