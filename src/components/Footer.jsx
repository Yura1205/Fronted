import React, { useState } from 'react';
import backgroundImage from '../assets/vista-superior-manos-sosteniendo-telefono-inteligente.jpg';

const footerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  fontFamily: 'Comic Sans MS',
  color: 'white', // Letras en color blanco
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover', // Para ajustar la imagen completa
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  padding: '20px',
};

const columnStyle = {
  flex: '1',
  padding: '10px',
  display: 'flex', // Para mostrar los enlaces en una columna
  flexDirection: 'column', // Columna en lugar de fila
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '5px 0', // Espacio entre enlaces
};

const starStyle = {
  cursor: 'pointer',
  fontSize: '24px',
  marginRight: '5px',
};

const Footer = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (stars) => {
    setRating(stars);
  };

  return (
    <div style={footerStyle} className="footer">
      <div style={columnStyle}>
        <h2>Turismo en Medellín</h2>
        <p>Viajes y Turismo Globo S.A.S</p>
        <p>Carrera 87A 34-56 barrio Almería - Colombia</p>
        <p>Teléfono: (321) 8940542</p>
        <p>Celular: 3052169982</p>
        <p>operacionesturismoenmedellin@gmail.com</p>
      </div>
      <div style={columnStyle}>
        <a href="#" style={linkStyle}>Contáctenos</a>
        <a href="#" style={linkStyle}>Avisos Legales</a>
        <a href="#" style={linkStyle}>Términos y condiciones</a>
        <a href="#" style={linkStyle}>Cláusulas de Responsabilidad</a>
        <a href="#" style={linkStyle}>Política de protección de datos</a>
        <a href="#" style={linkStyle}>Preguntas Frecuentes Pagos en línea</a>
        <a href="#" style={linkStyle}>Mapa del sitio</a>
      </div>
      <div style={columnStyle}>
        <p>Medellín me encanta</p>
        <p>CALIFIQUE SU EXPERIENCIA</p>
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              style={starStyle}
              onClick={() => handleRating(star)}
            >
              {rating >= star ? '★' : '☆'}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
