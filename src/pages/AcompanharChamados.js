import React from 'react';
import './AcompanharChamados.css';

const chamadosMock = [
  { id: 1, descricao: 'Buraco na rua', status: 'Em andamento' },
  { id: 2, descricao: 'Poste sem luz', status: 'Resolvido' },
];

const AcompanharChamados = () => {
  return (
    <div className="acompanhar-container">
      <h1>Acompanhar Chamados</h1>
      <table className="acompanhar-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {chamadosMock.map((chamado) => (
            <tr key={chamado.id}>
              <td>{chamado.id}</td>
              <td>{chamado.descricao}</td>
              <td>{chamado.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AcompanharChamados;
