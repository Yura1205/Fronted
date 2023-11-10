import React, { useState } from 'react';
import {
    Box,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Paper,
    IconButton,
} from '@mui/material';
import {
    Star as StarIcon,
    StarBorder as StarBorderIcon,
    Favorite as FavoriteIcon,
    FavoriteBorder as FavoriteBorderIcon,
} from '@mui/icons-material';
import Bar from '../../components/Bar';
import Image1 from '../../assets/image1.jpeg';
import Image2 from '../../assets/image2.jpeg';
import Image3 from '../../assets/image3.jpeg';
import Image4 from '../../assets/image4.jpeg';
import Image5 from '../../assets/image5.jpeg';
import Image6 from '../../assets/image6.jpeg';
import Image7 from '../../assets/image7.jpeg';
import Image8 from '../../assets/image8.jpeg';
import Image9 from '../../assets/image9.jpeg';
import Image10 from '../../assets/image10.jpeg';
import Image11 from '../../assets/image11.jpeg';
import Image12 from '../../assets/image12.jpeg';
import { DashboardNav } from '../../components/DashboardNav';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const servicesData = [
    {
        name: 'Pueblo de Guatape',
        description: 'Una joya escondida con casas coloridas y una gran roca para escalar.',
        price: '$100 COP',
        image: Image1,
        route: '/pagina1',
    },
    {
        name: 'Guatape',
        description: 'Explora este pintoresco pueblo con vistas panorámicas impresionantes.',
        price: '$150 COP',
        image: Image2,
        route: '/pagina2',
    },
    {
        name: 'Medellin metrocable',
        description: 'Un emocionante viaje en teleférico con vistas a la ciudad.',
        price: '$120 COP',
        image: Image3,
        route: '/pagina3',
    },
    {
        name: 'El Poblado',
        description: 'Un barrio moderno con tiendas y restaurantes de moda.',
        price: '$180 COP',
        image: Image4,
        route: '/pagina4',
    },
    {
        name: 'Plaza Botero',
        description: 'Descubre las famosas esculturas de Fernando Botero en esta plaza.',
        price: '$90 COP',
        image: Image5,
        route: '/pagina5',
    },
    {
        name: 'Pueblito Paisa',
        description: 'Réplica de un pueblo tradicional con vistas panorámicas.',
        price: '$200 COP',
        image: Image6,
        route: '/pagina6',
    },
    {
        name: 'Parque explora',
        description: 'Un museo interactivo y acuario para toda la familia.',
        price: '$150 COP',
        image: Image7,
        route: '/pagina7',
    },
    {
        name: 'Parque Arvi',
        description: 'Explora la naturaleza en este parque ecológico.',
        price: '$130 COP',
        image: Image8,
        route: '/pagina8',
    },
    {
        name: 'Museo de España',
        description: 'Descubre el arte y la cultura española en Medellín.',
        price: '$160 COP',
        image: Image9,
        route: '/pagina9',
    },
    {
        name: 'Museo del agua',
        description: 'Aprende sobre el agua y la sostenibilidad de manera divertida.',
        price: '$110 COP',
        image: Image10,
        route: '/pagina10',
    },
    {
        name: 'Parque Norte',
        description: 'Parque de diversiones con emocionantes atracciones.',
        price: '$170 COP',
        image: Image11,
        route: '/pagina11',
    },
    {
        name: 'Salto del angel',
        description: 'Una impresionante cascada en plena naturaleza.',
        price: '$140 COP',
        image: Image12,
        route: '/pagina12',
    },
];

const customStyles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
    },
    h1: {
        fontFamily: 'Comic Sans MS, sans-serif',
        fontSize: '42px',
        marginBottom: '0.5rem',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    },
    section: {
        padding: '5rem 5rem 0rem 5rem',
        marginBottom: '2rem',
        textAlign: 'center',
    },
    sectionProducts: {
        padding: '0rem 5rem 0rem 5rem',
        marginBottom: '2rem',
        textAlign: 'center',
    },
    card: {
        width: '300px',
        margin: '1rem',
    },
    media: {
        height: '260px',
    },
    stars: {
        display: 'flex',
        alignItems: 'center',
    },
    starIcon: {
        color: '#FFD700', // Amarillo dorado
    },
    starBorderIcon: {
        color: '#D3D3D3', // Gris claro
    },
    favoriteIcon: {
        color: 'red',
        position: 'absolute',
        top: '0.5rem',
        right: '0.5rem',
    },
};

export const ServiciosPage = () => {
    const rows = [];
    const itemsPerRow = 4;

    for (let i = 0; i < servicesData.length; i += itemsPerRow) {
        const rowItems = servicesData.slice(i, i + itemsPerRow);
        rows.push(rowItems);
    }

    const [ratings, setRatings] = useState(Array(servicesData.length).fill(0));
    const [favorites, setFavorites] = useState(Array(servicesData.length).fill(false));

    const handleStarClick = (index, rating) => {
        const newRatings = [...ratings];
        newRatings[index] = rating;
        setRatings(newRatings);
    };

    const handleFavoriteClick = (index) => {
        const newFavorites = [...favorites];
        newFavorites[index] = !newFavorites[index];
        setFavorites(newFavorites);
    };

    return (
        <>
            <DashboardNav />
            <section style={customStyles.section}>
                <div style={customStyles.container}>
                    <h1 style={customStyles.h1}>SERVICIOS DE TURISMO EN MEDELLÍN</h1>
                </div>
            </section>

            {rows.map((row, rowIndex) => (
                <section key={rowIndex} style={customStyles.sectionProducts}>
                    <Grid container spacing={3} justifyContent="center">
                        {row.map((service, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Link to={service.route} style={{ textDecoration: 'none' }}>
                                    <Card style={customStyles.card}>
                                        <CardMedia
                                            component="img"
                                            alt={service.name}
                                            height="260"
                                            image={service.image}
                                        />
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                {service.name}
                                                <IconButton
                                                    style={customStyles.favoriteIcon}
                                                    onClick={() => handleFavoriteClick(index)}
                                                >
                                                    {favorites[index] ? (
                                                        <FavoriteIcon />
                                                    ) : (
                                                        <FavoriteBorderIcon />
                                                    )}
                                                </IconButton>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {service.description}
                                                <br />
                                                Precio: {service.price}
                                            </Typography>
                                            <div style={customStyles.stars}>
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <IconButton
                                                        key={star}
                                                        onClick={() => handleStarClick(index, star)}
                                                    >
                                                        {ratings[index] >= star ? (
                                                            <StarIcon style={customStyles.starIcon} />
                                                        ) : (
                                                            <StarBorderIcon
                                                                style={customStyles.starBorderIcon}
                                                            />
                                                        )}
                                                    </IconButton>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </section>
            ))}

            <Footer />
        </>
    );
};

export default ServiciosPage;
