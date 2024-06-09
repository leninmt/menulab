import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackgroundContainer, Container, Row, ScrollContainer, Title, Dish, DishInfo, DishImage, LargeButton, ReserveContainer } from '../styles/MenuStyles.js';
import desayuno from '../img/desayuno.jpg'; // Cambia esta imagen por las correspondientes a cada sección

const Menu = () => {
  const navigate = useNavigate();
  const [selectedDishes, setSelectedDishes] = useState([]);

  const handleReserveClick = () => {
    navigate('/reserva');
  };

  const handleDishClick = (dish) => {
    if (selectedDishes.includes(dish)) {
      setSelectedDishes(selectedDishes.filter((selected) => selected !== dish));
    } else {
      setSelectedDishes([...selectedDishes, dish]);
    }
  };

  const sections = [
    { title: "Platos Fuertes", dishes: ["Plato Fuerte 1", "Plato Fuerte 2", "Plato Fuerte 3", "Plato Fuerte 4"] },
    { title: "Postres", dishes: ["Postre 1", "Postre 2", "Postre 3", "Postre 4"] },
    { title: "Bebidas", dishes: ["Bebida 1", "Bebida 2", "Bebida 3", "Bebida 4"] },
    { title: "Cócteles", dishes: ["Cóctel 1", "Cóctel 2", "Cóctel 3", "Cóctel 4"] }
  ];

  return (
    <BackgroundContainer>
      <Container>
        {sections.map((section, sectionIndex) => (
          <Row key={sectionIndex}>
            <Title>{section.title}</Title>
            <ScrollContainer>
              {section.dishes.map((dish, index) => (
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
        ))}

        {selectedDishes.length > 0 && (
          <ReserveContainer>
            <h3>Has seleccionado:</h3>
            <ul>
              {selectedDishes.map((dish, index) => (
                <li key={index}>{dish}</li>
              ))}
            </ul>
            <LargeButton onClick={handleReserveClick}>Reservar</LargeButton>
          </ReserveContainer>
        )}
      </Container>
    </BackgroundContainer>
  );
};

export default Menu;
