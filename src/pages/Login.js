import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica de validação
    if (username === "admin" && password === "1234") {
      onLogin(); // Chama a função de autenticação do App
    } else {
      alert("Credenciais inválidas!");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Usuário:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
};

export default Login;
