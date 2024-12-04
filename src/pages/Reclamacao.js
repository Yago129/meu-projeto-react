import React, { useState } from 'react';
import './Reclamacao.css';

const Reclamacao = () => {
  const [descricao, setDescricao] = useState('');
  const [foto, setFoto] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar o código para enviar a reclamação ao servidor
    console.log('Descrição:', descricao);
    console.log('Foto:', foto);
    alert('Chamado aberto com sucesso!');
  };

  return (
    <div className="reclamacao-container">
      <h1>Abrir Chamado</h1>
      <form onSubmit={handleSubmit} className="reclamacao-form">
        <label htmlFor="descricao">Descrição do problema:</label>
        <textarea
          id="descricao"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />

        <label htmlFor="foto">Enviar Foto:</label>
        <input
          type="file"
          id="foto"
          onChange={(e) => setFoto(e.target.files[0])}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Reclamacao;
