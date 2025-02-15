const express = require('express');
// Importa o cliente PostgreSQL
const { Client } = require('pg'); 

const app = express();
const port = 3000;
// Analisa o corpo das requisições em JSON
app.use(express.json());

// Conexão com o banco de dados PostgreSQL
const client = new Client({
  user: 'nome do usuario',
  host: 'localhost',
  database: 'tarefas',
  password: 'colocar senha', 
  port: 5432,
});

client.connect();

// Criar uma nova tarefa
app.post('/tarefas', async (req, res) => {
  const { nome, descricao } = req.body;

  try {
    const result = await client.query(
      'INSERT INTO tarefas (nome, descricao) VALUES ($1, $2) RETURNING *',
      [nome, descricao]
    );
    res.status(201).json(result.rows[0]); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Lista todas as tarefas
app.get('/tarefas', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM tarefas');
    res.status(200).json(result.rows); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Exclui uma tarefa
app.delete('/tarefas/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await client.query('DELETE FROM tarefas WHERE id = $1 RETURNING *', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    res.status(200).json(result.rows[0]); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/tarefas/:id', async (req, res) => {
  const id = parseInt(req.params.id); 
  const { nome, descricao } = req.body; 

  try {
    const result = await client.query(
      'UPDATE tarefas SET nome = $1, descricao = $2 WHERE id = $3 RETURNING *',
      [nome, descricao, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    
    // Retorna a tarefa atualizada
    res.json(result.rows[0]); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
