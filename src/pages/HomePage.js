import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = ({ username }) => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1 className="homepage-title">Bem-vindo ao Eu Fiscalizo, buscamos juntos pela eficiência</h1>
        {username && <p className="welcome-message">Olá, {username}! Estamos felizes em tê-lo aqui.</p>}
      </header>

      <nav className="homepage-nav">
        <Link to="/abrir-chamado" className="homepage-link">
          📩 Abrir um Chamado
        </Link>
        <Link to="/acompanhar-chamados" className="homepage-link">
          📋 Acompanhar Chamados
        </Link>
      </nav>

      <section className="project-info">
        <h2>Sobre o Projeto</h2>
        <p>
          "Eu Fiscalizo" é um MVP (Produto Mínimo Viável) desenvolvido para facilitar o acompanhamento de serviços públicos. 
          Nesta primeira fase, o sistema permitirá que os usuários registrem e acompanhem casos de coleta de lixo, promovendo maior transparência e 
          controle. Em breve, novas funcionalidades serão implementadas, expandindo o alcance do projeto para outros serviços, com o objetivo de 
          oferecer uma plataforma completa para o monitoramento de ações públicas na cidade."
        </p>
      </section>

      <section className="team-info">
        <h2>Equipe</h2>
        <ul>
          <li>Élisson Jorge de Brito Conceição </li>
          <li>João Victor Oliveira da Silva </li>
          <li>Sérgio Murilo Nogueira </li>
          <li>Yago Ferreira Correa </li>
          <li>Vitor Emanuel Nunes  </li>
        </ul>
      </section>

      <section className="contact-info">
        <h2>Contato</h2>
        <p>📞 Telefone: (21) 1234-1234</p>
        <p>📧 E-mail: contato@eufiscalizo.com</p>
      </section>

      <section className="project-objectives">
        <h2>Objetivos</h2>
        <ul>
          <li>Facilitar a comunicação entre cidadãos e autoridades.</li>
          <li>Promover transparência em todas as esferas.</li>
          <li>Empoderar as comunidades para agir contra irregularidades.</li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
