import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../assets/file.png"; // Import correto do logotipo

const Header = () => {
  return (
    <header style={styles.header}>
      {/* Espaço para a logo */}
      <div style={styles.logoContainer}>
        <img
          src={logo} // Usando a variável importada corretamente
          alt="Logo"
          style={styles.logo}
        />
        <h1 style={styles.title}>Eu Fiscalizo</h1>
      </div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/login" style={styles.link}>
          Login
        </Link>
        <Link to="/abrir-chamado" style={styles.link}>
          Abrir Chamado
        </Link>
        <Link to="/acompanhar-chamados" style={styles.link}>
          Acompanhar Chamados
        </Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logo: {
    width: "50px", // Ajuste o tamanho da logo conforme necessário
    height: "50px",
  },
  title: {
    fontSize: "1.5rem",
    margin: 0,
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Header;

