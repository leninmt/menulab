import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Reserva from './pages/Reserva';
import Navbar from './components/Navbar';
import Nosotros from './pages/Nosotros';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reserva" element={<Reserva />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </Router>
  );
}

export default App;