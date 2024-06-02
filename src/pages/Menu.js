import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import desayuno from '../img/desayuno.jpg';


const Menu = () => {
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate('/reserva'); // Navega a la página del menú
  };
  return (
    <Container>
      
      <Title>Desayunos</Title>
      <Dish>
        <DishImage src={desayuno} alt="Breakfast" />
        <DishInfo>
          <h3>Nombre del Plato</h3>
          <p>Descripción</p>
          <p>Precio: $$</p>
          <Button onClick={handleReserveClick}>Reservar</Button>
        </DishInfo>
      </Dish>
      {/* Repite para otros platos */}
    </Container>
  );
};

export default Menu;



const Container = styled.div`
  color: black;
  padding: 2rem;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Dish = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const DishInfo = styled.div`
  flex: 1;
`;

const DishImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-right: 1rem;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background-color: #FFA500;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #FF8C00;
  }
`;