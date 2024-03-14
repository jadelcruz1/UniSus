import React from 'react';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";

import Header from './components/Header';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Cadastro from './components/Cadastro';
import CadastroMedico from './components/CadastroMedico';
import MedicosCadastrados from './components/MedicosCadastrados';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="container">
             <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/CadastroMedico" element={<CadastroMedico />} />
            <Route path="/medicosCadastrados" element={<MedicosCadastrados />} />
            
            {/* Adicione outras rotas conforme necessário */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
