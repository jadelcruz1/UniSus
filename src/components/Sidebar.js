// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Arquivo de estilos

const Sidebar = () => {
  return (
    <aside className="sidebar">    
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/" className="sidebar-link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/profile" className="sidebar-link">
              Perfil
            </Link>
          </li>
          {/* Adicione outros itens de menu conforme necessário */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
