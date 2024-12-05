import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
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
              </>
            )}
          </Routes>

          {isAuthenticated && (
            // Exibe o botão de logout
            <div style={styles.logoutContainer}>
              <button onClick={handleLogout} style={styles.logoutButton}>
                Deslogar
              </button>
            </div>
          )}
        </main>
      </div>
    </Router>
  );
};

// Estilos para o botão de logout
const styles = {
  logoutContainer: {
    marginTop: "20px",
    textAlign: "center",
  },
  logoutButton: {
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default App;
