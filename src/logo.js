return (
    <Router>
      <div>
        <Header /> {/* Header visível sempre */}
        <main>
          <Routes>
            {!isAuthenticated ? (
              <Route path="*" element={<Login onLogin={handleLogin} />} />
            ) : (
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
  