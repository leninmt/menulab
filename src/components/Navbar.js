import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <NavItem><Link to="/">Inicio</Link></NavItem>
      <NavItem><Link to="/nosotros">Nosotros</Link></NavItem>
      <NavItem><Link to="/menu">Menu</Link></NavItem>
      <NavItem><Link to="/login">Login</Link></NavItem>
    </Nav>
  );
};

export default Navbar;


const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  background: rgba(0, 0, 0, 0.7);;
  color: white;
  padding: 1rem;
`;

const NavItem = styled.div`
  margin-left: 1rem;
  
  a {
    color: white; /* Cambio del color de los enlaces */
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;