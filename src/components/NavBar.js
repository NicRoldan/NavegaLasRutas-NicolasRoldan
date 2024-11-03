import React from 'react';
import CartWidget from './CartWidget';
import logo from '../assets/logo.png'; // Cambia esta ruta según la ubicación de tu imagen

const NavBar = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Solo el logo como enlace de inicio */}
        <a className="navbar-brand" href="#home">
          <img src={logo} alt="Logo Mi Tienda" style={{ width: '40px' }} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contacto</a>
            </li>
          </ul>

          <CartWidget cartCount={cartCount} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
