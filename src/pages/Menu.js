import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import desayuno from '../img/desayuno.jpg'; // Cambia esta imagen por las correspondientes a cada sección

const Menu = () => {
  const navigate = useNavigate();
  const [selectedDishes, setSelectedDishes] = useState([]);

  const handleReserveClick = () => {
    navigate('/reserva'); // Navega a la página de reserva
  };

  const handleDishClick = (dish) => {
    if (selectedDishes.includes(dish)) {
      setSelectedDishes(selectedDishes.filter((selected) => selected !== dish));
    } else {
      setSelectedDishes([...selectedDishes, dish]);
    }
  };

  return (
    <Container>
      <Row>
        <Title>Platos Fuertes</Title>
        <ScrollContainer>
          {["Plato Fuerte 1", "Plato Fuerte 2", "Plato Fuerte 3", "Plato Fuerte 4"].map((dish, index) => (
            <Dish 
              key={index} 
              onClick={() => handleDishClick(dish)} 
              selected={selectedDishes.includes(dish)}
            >
              <DishImage src={desayuno} alt={dish} />
              <DishInfo>
                <h3>{dish}</h3>
                <p>Descripción del {dish}</p>
                <p>Precio: $$</p>
              </DishInfo>
            </Dish>
          ))}
        </ScrollContainer>
      </Row>

      <Row>
        <Title>Postres</Title>
        <ScrollContainer>
          {["Postre 1", "Postre 2", "Postre 3", "Postre 4"].map((dish, index) => (
            <Dish 
              key={index} 
              onClick={() => handleDishClick(dish)} 
              selected={selectedDishes.includes(dish)}
            >
              <DishImage src={desayuno} alt={dish} />
              <DishInfo>
                <h3>{dish}</h3>
                <p>Descripción del {dish}</p>
                <p>Precio: $$</p>
              </DishInfo>
            </Dish>
          ))}
        </ScrollContainer>
      </Row>

      <Row>
        <Title>Bebidas</Title>
        <ScrollContainer>
          {["Bebida 1", "Bebida 2", "Bebida 3", "Bebida 4"].map((dish, index) => (
            <Dish 
              key={index} 
              onClick={() => handleDishClick(dish)} 
              selected={selectedDishes.includes(dish)}
            >
              <DishImage src={desayuno} alt={dish} />
              <DishInfo>
                <h3>{dish}</h3>
                <p>Descripción de la {dish}</p>
                <p>Precio: $$</p>
              </DishInfo>
            </Dish>
          ))}
        </ScrollContainer>
      </Row>

      <Row>
        <Title>Cócteles</Title>
        <ScrollContainer>
          {["Cóctel 1", "Cóctel 2", "Cóctel 3", "Cóctel 4"].map((dish, index) => (
            <Dish 
              key={index} 
              onClick={() => handleDishClick(dish)} 
              selected={selectedDishes.includes(dish)}
            >
              <DishImage src={desayuno} alt={dish} />
              <DishInfo>
                <h3>{dish}</h3>
                <p>Descripción del {dish}</p>
                <p>Precio: $$</p>
              </DishInfo>
            </Dish>
          ))}
        </ScrollContainer>
      </Row>
      
      {selectedDishes.length > 0 && (
        <ReserveContainer>
          <h3>Has seleccionado:</h3>
          <ul>
            {selectedDishes.map((dish, index) => (
              <li key={index}>{dish}</li>
            ))}
          </ul>
          <Button onClick={handleReserveClick}>Reservar</Button>
        </ReserveContainer>
      )}
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  padding: 2rem;
`;

const Row = styled.div`
  margin-bottom: 2rem;
`;

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 1rem 0;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #FFA500;
    border-radius: 4px;
  }
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Dish = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  min-width: 220px;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#FF8C00' : 'white')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
`;

const DishInfo = styled.div`
  flex: 1;
`;

const DishImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
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

const ReserveContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
`;