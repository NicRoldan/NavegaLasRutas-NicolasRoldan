import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { CartContext } from '../context/CartContext';
import logo from '../assets/logo.png'; // Ajusta esta ruta según la ubicación de tu logo

const NavBar = () => {
  const { totalCartItems } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo Mi Tienda" style={{ width: '40px' }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/artesanias">
                Artesanías
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/tejidos">
                Tejidos
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="d-flex align-items-center text-decoration-none text-white">
            <CartWidget cartCount={totalCartItems} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
