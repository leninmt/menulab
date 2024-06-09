import styled from "styled-components";


export const BackgroundContainer = styled.div`
  background-color: #242323; /* Cambia este color al que desees */
  min-height: 100vh;
  padding: 2rem 0;
`;

export const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
`;

export const Row = styled.div`
  margin-bottom: 3rem;
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 1rem 0;
  scrollbar-width: thin;
  scrollbar-color: #FFA500 transparent;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #FFA500;
    border-radius: 4px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  text-align: center;
  color:white;
`;

export const Dish = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
  min-width: 220px;
  border: px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#FF8C00' : 'black')};
  color: ${(props) => (props.selected ? 'white' : 'white')};
  box-shadow: ${(props) => (props.selected ? '0 4px 8px rgba(0,0,0,0.2)' : 'none')};
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 20px 15px rgba(0,0,0,0.3);
  }
`;

export const DishInfo = styled.div`
  text-align: center;
  margin-top: 1rem;

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  p {
    margin: 0.2rem 0;
  }
`;

export const DishImage = styled.img`
  width: 200px;
  height: 150px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  background-color: #FFA500;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #FF8C00;
  }
`;


export const LargeButton = styled(Button)`
  font-size: 1.5rem; /* Aumenta el tamaño del texto */
  padding: 1rem 2rem; /* Aumenta el tamaño del botón */
`;

export const ReserveContainer = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 2rem auto;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 1rem;
  }

  li {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 0.5rem;
  }
`;