import React from 'react';
import styled from 'styled-components';
import nosotrosimg from '../img/nosotrosimg.jpg'; // Importa la imagen de nosotros

const Nosotros = () => {
  return (
    <Container>
      <Imagen src={nosotrosimg} alt="Nosotros" />
      <Contenido>
        <Titulo>Sobre Nosotros</Titulo>
        <Parrafo>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ipsum
          sollicitudin, fermentum nunc ac, faucibus nunc.
        </Parrafo>
        <Parrafo>
          Sed sit amet libero nec est dictum consequat. Sed id interdum felis, nec
          tempus purus.
        </Parrafo>
      </Contenido>
    </Container>
  );
};

export default Nosotros;

// Estilos

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px); /* Resta el tamaño del navbar */
`;

const Contenido = styled.div`
  width: 50%;
  padding: 0 20px;
`;

const Titulo = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Parrafo = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Imagen = styled.img`
width: 50%;
  max-width: 100%;
  max-height: calc(100vh - 60px); /* Resta el tamaño del navbar */
  object-fit: cover; /* Escala la imagen para llenar el contenedor */
`;