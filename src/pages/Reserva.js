import React, { useState } from 'react';
import styled from 'styled-components';
import portada from '../img/portada.jpg';
import ConfirmacionReserva from '../components/Modal/ConfirmacionReserva';
import reservaService from '../service/reserva'; // Asegúrate de ajustar la ruta según sea necesario

const Reserva = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reserva, setReserva] = useState([]);
  const [platos, setPlatos] = useState([
    { cantidad: '', numeropersonas: '' },
    { cantidad: '', numeropersonas: '' }
  ]);
  const [cliente, setCliente] = useState({
    nombreCliente: '',
    email: '',
    celular: ''
  });

  const handleChangePlato = (index, e) => {
    const { name, value } = e.target;
    const newPlatos = [...platos];
    newPlatos[index] = { ...newPlatos[index], [name]: value };
    setPlatos(newPlatos);
  };

  const handleChangeCliente = (e) => {
    const { name, value } = e.target;
    setCliente({
      ...cliente,
      [name]: value,
    });
  };

  const handleOrdenarClick = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del botón
    const newReserva = platos.map(plato => ({ ...plato, ...cliente, descripcion: 'Descripción del Plato', fechaingreso: '2024-06-08', precio: 'Precio del Plato' }));
    reservaService.createReserva(newReserva)
      .then((data) => {
        setReserva([...reserva, ...data]);
        setPlatos([{ cantidad: '', numeropersonas: '' }, { cantidad: '', numeropersonas: '' }]);
        setCliente({
          nombreCliente: '',
          email: '',
          celular: ''
        });
        setModalOpen(true); // Abre el modal de confirmación
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
      <PlatoForm>
        <Section>
          <SectionTitle>Datos del Plato</SectionTitle>
          {platos.map((plato, index) => (
            <PlatoContainer key={index}>
              <ImageContainer>
                <Image src={portada} alt="Imagen del Plato" />
              </ImageContainer>
              <PlatoDetailsContainer>
                <PlatoDetails>
                  <Title>Nombre del Plato</Title>
                  <Description>Descripción del Plato</Description>
                  <Price>Precio: $$</Price>
                </PlatoDetails>
              </PlatoDetailsContainer>
              <InputsContainer>
                <InputContainer>
                  <Label>Cantidad</Label>
                  <Input type="number" value={plato.cantidad} onChange={(e) => handleChangePlato(index, e)} name="cantidad" required />
                </InputContainer>
                <InputContainer>
                  <Label>Número de personas</Label>
                  <Input type="number" value={plato.numeropersonas} onChange={(e) => handleChangePlato(index, e)} name="numeropersonas" required />
                </InputContainer>
              </InputsContainer>
            </PlatoContainer>
          ))}
        </Section>
      </PlatoForm>
      <ClienteForm>
        <Section>
          <SectionTitle>Datos del Cliente</SectionTitle>
          <Label>Nombre del Cliente</Label>
          <Input type="text" value={cliente.nombreCliente} onChange={handleChangeCliente} name="nombreCliente" required />
          <Label>Email</Label>
          <Input type="email" value={cliente.email} onChange={handleChangeCliente} name="email" required />
          <Label>Celular</Label>
          <Input type="tel" value={cliente.celular} onChange={handleChangeCliente} name="celular" required />
          <ButtonContainer>
            <Button type="submit" onClick={handleOrdenarClick}>Ordenar</Button>
          </ButtonContainer>
        </Section>
      </ClienteForm>
      <ConfirmacionReserva isOpen={modalOpen} onClose={handleCloseModal} />
    </Container>
  );
};

export default Reserva;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 80%;
  max-width: 1200px;
  margin: auto;
`;

const FormSection = styled.div`
  flex-basis: 45%;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
`;

const PlatoForm = styled(FormSection)`
  margin-right: 2rem;
`;

const ClienteForm = styled(FormSection)``;

const PlatoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const ImageContainer = styled.div`
  flex: 0 0 30%;
`;

const PlatoDetailsContainer = styled.div`
  flex: 0 0 50%;
`;

const InputsContainer = styled.div`
  flex: 0 0 20%;
`;

const PlatoDetails = styled.div`
  margin-left: 1.5rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  margin-bottom: 0.5rem;
`;

const Price = styled.p`
  margin-bottom: 0.5rem;
`;

const InputContainer = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Button = styled.button`
  background-color: #FFA500;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  width: 100%;
  max-width: 200px;
  &:hover {
    background-color: #FF8C00;
  }
`;