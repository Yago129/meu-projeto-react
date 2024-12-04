import React from "react";
import "./AbrirChamado.css";

const AbrirChamado = () => {
  return (
    <div className="container">
      <h1>Abrir Chamado</h1>
      <form>
        <label htmlFor="titulo">Título do Chamado:</label>
        <input type="text" id="titulo" name="titulo" placeholder="Digite o título" />

        <label htmlFor="descricao">Descrição:</label>
        <textarea
          id="descricao"
          name="descricao"
          rows="5"
          placeholder="Descreva o problema ou situação"
        ></textarea>

        <label htmlFor="categoria">Categoria:</label>
        <select id="categoria" name="categoria">
          <option value="">Selecione a categoria</option>
          <option value="Falha de Coleta de Lixo">Falha de Coleta de Lixo</option>
          <option value="Coleta Irregular">Coleta Irregular</option>
          <option value="outros">Outros</option>
        </select>

        <button type="submit">Enviar Chamado</button>
      </form>
    </div>
  );
};

export default AbrirChamado;
