import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import portada from '../img/portada.jpg'; // Sube un nivel para importar la imagen

const Index = () => {
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate('/menu'); // Navega a la página del menú
  };
  return (

    <Container>
      <ImageWrapper>
        <Image src={portada} alt="Restaurant Image" />
        <Button onClick={handleReserveClick}>Reservar Plato</Button>
      </ImageWrapper>
    </Container>
  );
};







const Container = styled.div`
  text-align: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px; /* Ajusta la altura de la imagen */
  overflow: hidden; /* Oculta la parte de la imagen que se sale del contenedor */
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centra la imagen en el contenedor */
`;
const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centra el botón en el contenedor */
  background-color: #FFA500;
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #FF8C00;
  }
`;



export default Index;
