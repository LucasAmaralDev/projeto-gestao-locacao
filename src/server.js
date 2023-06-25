require('./database');
require('dotenv').config();

const express = require('express');
const { routes } = require('./routes');

const server = express();

server.use(express.json());
server.use(routes);

const PORT = 8080
server.listen(PORT, () => {
    console.log(`Servidor conectador na porta ${PORT}`);
});
