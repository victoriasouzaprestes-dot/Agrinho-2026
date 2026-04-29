const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const farmRoutes = require('./routes/farmRoutes');  // Importando as rotas

const app = express();
const port = 3000;

// Middleware para interpretar o corpo da requisição como JSON
app.use(bodyParser.json());

// Servir arquivos estáticos (o HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Usando as rotas da fazenda
app.use('/api', farmRoutes);

// Rota inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na http://localhost:${port}`);
});