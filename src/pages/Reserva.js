import React, { useState } from 'react';
import {BackgroundContainer,Container,Section,SectionTitle,PlatoForm,ClienteForm,PlatoContainer,ImageContainer,PlatoDetailsContainer,InputsContainer, PlatoDetails,Image,Title,Description,Price,InputContainer,Label,Input,ButtonContainer,Button} from '../styles/ReservaStyles.js'

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
    <BackgroundContainer>
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
    </BackgroundContainer>
  );
};

export default Reserva;

