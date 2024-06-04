import React, { useState } from 'react';
import styled from 'styled-components';
import portada from '../img/portada.jpg';
import ConfirmacionReserva from '../components/Modal/ConfirmacionReserva';
import reservaService from '../service/reserva'; // Asegúrate de ajustar la ruta según sea necesario

const Reserva = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reserva, setReserva] = useState([]);
  const [newReserva, setnewReserva] = useState({
    descripcion: '',
    fechaingreso: '',
    numeropersonas: '',
    precio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setnewReserva({
      ...newReserva,
      [name]: value,
    });
  };

  const handleOrdenarClick = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del botón
    reservaService.createReserva(newReserva)
      .then((data) => {
        setReserva([...reserva, data]);
        setnewReserva({
          descripcion: '',
          fechaingreso: '', 
          numeropersonas: '',
          precio: '',
        })
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <Form>
        <LeftSection>
          <Image src={portada} alt="Imagen del Plato" />
          <Title>Nombre del Plato</Title>
          <Description>Descripción</Description>
          <Price>Precio: $$</Price>
        </LeftSection>
        <RightSection>
          <Label>Descripción</Label>
          <Input type="string" value={newReserva.descripcion} onChange={handleChange} name="descripcion" />
          <Label>Fecha ingreso</Label>
          <Input type="date" value={newReserva.fechaingreso} onChange={handleChange} name="fechaingreso" />
          <Label>Número de personas</Label>
          <Input type="number" value={newReserva.numeropersonas} onChange={handleChange} name="numeropersonas" />
          <Label>Precio</Label>
          <Input type="number" value={newReserva.precio} onChange={handleChange} name="precio" />
        </RightSection>
      </Form>
      <Button onClick={handleOrdenarClick} type="submit">Ordenar</Button>
      <ConfirmacionReserva isOpen={modalOpen} onClose={handleCloseModal} />
    </Container>
  );
};

export default Reserva;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Form = styled.div` /* Cambiado a styled.div ya que no se utiliza onSubmit */
  display: flex;
  justify-content: space-between; /* Alinea las secciones izquierda y derecha */
  align-items: flex-start; /* Alinea las secciones en la parte superior */
  width: 80%;
  max-width: 800px;
  padding: 2rem; /* Agrega espacio alrededor del formulario */
  border: 2px solid rgba(0, 0, 0, 0.2); /* Agrega un borde semi-transparente */
  border-radius: 8px; /* Agrega bordes redondeados */
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Image = styled.img`
  width: 300px;
  height: auto;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Description = styled.p`
  margin-bottom: 0.5rem;
`;

const Price = styled.p`
  margin-bottom: 0.5rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #FFA500;
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  width: 100%;
  max-width: 200px;
  margin-top: 1rem;
  &:hover {
    background-color: #FF8C00;
  }
`;