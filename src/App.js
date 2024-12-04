import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Complaint from "./pages/Complaint";
import Reclamacao from "./pages/Reclamacao";
import AcompanharChamados from "./pages/AcompanharChamados";
import AbrirChamado from "./pages/AbrirChamado";
import Header from "./components/Header";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Função para simular login
  const handleLogin = () => {
    setIsAuthenticated(true); // Define como autenticado após login
  };

  // Função para simular logout
  const handleLogout = () => {
    setIsAuthenticated(false); // Retorna para estado de não autenticado
  };

  return (
    <Router>
      <div>
        {isAuthenticated && <Header />} {/* Header só aparece após login */}
        <main>
          <Routes>
            {!isAuthenticated ? (
              // Se não estiver autenticado, redireciona para login
              <Route path="*" element={<Login onLogin={handleLogin} />} />
            ) : (
              // Rotas acessíveis após autenticação
              <>
                <Route path="/" element={<HomePage />} />
                <Route path="/complaint" element={<Complaint />} />
                <Route path="/abrir-chamado" element={<AbrirChamado />} />
                <Route path="/acompanhar-chamados" element={<AcompanharChamados />} />
                <Route path="/reclamacao" element={<Reclamacao />} />
                <Route
                  path="/logout"
                  element={<button onClick={handleLogout}>Logout</button>}
                />
              </>
            )}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
