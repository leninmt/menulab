import React from 'react';
import styled from 'styled-components';
import loginimg from '../img/loginimg.jpg'; // Importa la imagen de login

const Login = () => {
  return (
    <Container>
      <ImagenContainer>
        <Imagen src={loginimg} alt="Login" />
      </ImagenContainer>
      <Formulario>
        <Title>Sign In</Title>
        <Label>User</Label>
        <Input type="text" />
        <Label>Password</Label>
        <Input type="password" />
        <Button>Login</Button>
      </Formulario>
    </Container>
  );
};

export default Login;

// Estilos

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const ImagenContainer = styled.div`
  flex: 1; /* Ocupa el 50% del ancho */
  background: #f0f0f0; /* Color de fondo para visualización */
`;

const Imagen = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Para que la imagen cubra todo el contenedor */
`;

const Formulario = styled.div`
  flex: 1; /* Ocupa el 50% del ancho */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 3rem; /* Aumenta el padding */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 2rem; /* Aumenta el margen inferior */
`;

const Label = styled.label`
  margin-bottom: 1rem; /* Aumenta el margen inferior */
  text-align: left; /* Alinea el texto a la izquierda */
  width: 100%; /* Ancho completo */
`;

const Input = styled.input`
  margin-bottom: 1.5rem; /* Aumenta el margen inferior */
  padding: 1rem; /* Aumenta el padding */
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%; /* Ancho completo */
`;

const Button = styled.button`
  background-color: #FFA500;
  color: white;
  border: none;
  padding: 1rem 2rem; /* Aumenta el padding */
  cursor: pointer;

  &:hover {
    background-color: #FF8C00;
  }
`;