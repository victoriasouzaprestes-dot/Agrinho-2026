const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Servir arquivos estáticos (o HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Rota de teste
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na http://localhost:${port}`);
});