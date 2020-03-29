const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');


const app = express();
const routes = require('./routes');

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(errors());
/*
     - Metodos HTTP
        * GET: Buscar/listar uma informação do backend
        * POST: Criar uma informação no backend
        * PUT: Alterar uma informação no backend
        * DELETE: Deletar uma informação no backend
*/


/*
    - Tipos de parâmetros
        * Query Params: parâmetros nomeados enviados na rota -> {filtros, paginação}
        * Route Params: parâmetros utilizados para identificar recursos - > unico recurso ex: /users:id
        * Request Body: Corpo da requisição, utilizado para criar ou utilizar recursos

*/

/* 
    - Bancos de Dados
        * SQL: MySQL, SQLite, PostGre, Oracle, MS-SQLSERVER
        * NoSQL: MongoDB, CouchDB, etc..
    
    - Formas de conexão
        * DRIVER: SELECT * FROM users
        * Query Builder: table('users').select('*').where()

*/



module.exports = app;
