import styled from "styled-components";


export const BackgroundContainer = styled.div`
  background-color: #242323; /* Cambia este color al que desees */
  min-height: 100vh;
  padding: 2rem 0;
  color: white;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1150px;
  color: white;
  padding-left: 5em;
`;

export const FormSection = styled.div`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
   margin: 0 auto;
   
`;

export const Section = styled.div`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 1rem;
  
`;

export const PlatoForm = styled(FormSection)`
  margin-right: 2%;
  
`;

export const ClienteForm = styled(FormSection)`
  background-color: #363636; /* Color de fondo del formulario de cliente */
  padding: 20px;
  padding-right: 35px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra */
  margin-top: 2rem; /* Espaciado desde arriba */
  margin-left: 20%;
  
`;

export const PlatoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ccc;
  
`;

export const ImageContainer = styled.div`
  flex: 0 0 30%;
  padding-top: 29px;
`;

export const PlatoDetailsContainer = styled.div`
  flex: 0 0 50%;
  color: white;
`;

export const InputsContainer = styled.div`
  flex: 0 0 20%;
  padding-top: 15px;
`;

export const PlatoDetails = styled.div`
  margin-left: 1.5rem;
   color: white;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  color: white;
`;

export const Description = styled.p`
  margin-bottom: 0.5rem;
  color: #F0E7DC;
`;

export const Price = styled.p`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const InputContainer = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.75rem;
  margin-top: 0.5rem;
  color: #F0E7DC;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  background-color: #AC9A85;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const Button = styled.button`
  background-color: #FFA500;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  width: 100%;
  max-width: 200px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #FF8C00;
  }
`;