const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configurar a conexão com o MySQL
const connection = mysql.createConnection({
  host: 'localhost', // Endereço do servidor MySQL
  user: 'root', // Usuário do MySQL
  password: '201018', // Senha do MySQL
  database: 'eu_fiscalizo', // Nome do banco de dados
});
  
// Conectar ao MySQL
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  } else {
    console.log('Conectado ao MySQL!');
  }
});

// Rota para buscar dados
app.get('/api/dados', (req, res) => {
  connection.query('SELECT * FROM fiscalizacoes', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Rota para adicionar dados
app.post('/api/dados', (req, res) => {
  const { titulo, descricao } = req.body;
  connection.query(
    'INSERT INTO fiscalizacoes (titulo, descricao) VALUES (?, ?)',
    [titulo, descricao],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ id: results.insertId, titulo, descricao });
    }
  );
});

// Iniciar o servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
