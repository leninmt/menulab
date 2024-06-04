import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const ConfirmacionReserva = ({ isOpen, onClose, reserva }) => {
  const [mostrarNotificacion, setMostrarNotificacion] = useState(false);

  useEffect(() => {
    if (mostrarNotificacion) {
      setTimeout(() => {
        setMostrarNotificacion(false);
      }, 3000);
    }
  }, [mostrarNotificacion]);

  const handleAceptarReserva = () => {
    onClose();
    setMostrarNotificacion(true);
    setTimeout(() => {
      onClose();
      window.location.href = "/"; // Redirecciona al index
    }, 2000);
  };

  return (
    <>
      {isOpen && (
        <ModalOverlay onClick={onClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={onClose}>X</CloseButton>
            <ModalTitle>Confirmación de Reserva</ModalTitle>
            <ModalRow>
              <ModalColumn>
                <SectionHeader>Datos del Cliente</SectionHeader>
                <SectionContent>
                  <p>
                    <strong>Nombre:</strong> {reserva.nombreCliente}
                  </p>
                  <p>
                    <strong>Email:</strong> {reserva.emailCliente}
                  </p>
                  <p>
                    <strong>Teléfono:</strong> {reserva.telefonoCliente}
                  </p>
                </SectionContent>
              </ModalColumn>
              <ModalColumn>
                <SectionHeader>Datos del Plato</SectionHeader>
                <SectionContent>
                  <p>
                    <strong>Nombre del Plato:</strong> {reserva.nombrePlato}
                  </p>
                  <p>
                    <strong>Precio:</strong> {reserva.precio}
                  </p>
                  <p>
                    <strong>Cantidad:</strong> {reserva.cantidadPlatos}
                  </p>
                  <p>
                    <strong>Fecha de Reserva:</strong> {reserva.fechaReserva}
                  </p>
                  <p>
                    <strong>Hora de Reserva:</strong> {reserva.horaReserva}
                  </p>
                </SectionContent>
              </ModalColumn>
            </ModalRow>
            <Button onClick={handleAceptarReserva}>Aceptar</Button>
          </ModalContent>
        </ModalOverlay>
      )}
      {mostrarNotificacion && (
        <Notification>
          Anuncio: Su reserva ha sido enviada correctamente
        </Notification>
      )}
    </>
  );
};

export default ConfirmacionReserva;

const fadeIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  width: 80%;
  max-width: 800px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ModalTitle = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const ModalRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const ModalColumn = styled.div`
  width: 48%;
`;

const SectionHeader = styled.h2`
  margin-bottom: 1rem;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: #FFA500;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  width: 100%;
  max-width: 200px;
  margin-top: 1rem;
  &:hover {
    background-color: #FF8C00;
  }
`;

const Notification = styled.div`
  position: fixed;
  top: 70px; /* Ajusta la distancia desde la parte superior */
  right: 20px; /* Ajusta la distancia desde el lado derecho */
  background-color: #FFDC16;
  color: black;
  padding: 10px 20px;
  border-radius: 4px;
  animation: ${fadeIn} 0.5s ease-in-out; /* Agrega animación */
`;
