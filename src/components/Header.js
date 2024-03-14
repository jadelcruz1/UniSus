// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

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
              <Link to="/cadastro">Cadastro Paciente</Link>
            </li>
            <li>
              <Link to="/CadastroMedico">Cadastro Médicos</Link>
            </li>
            <li>
              <Link to="/profile">Usuários Cadastrados</Link>
            </li>   
            <li>
              <Link to="/medicosCadastrados">Médicos Cadastrados</Link>
            </li>   

          
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
