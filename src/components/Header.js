// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Arquivo de estilos

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">UniSus</Link>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/profile">Perfil</Link>
            </li>
            {/* Adicione outros itens de menu conforme necessário */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;