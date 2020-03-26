const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Caso queira somente acesso de uma origem
// app.use(cors({
//   origin: 'http://site.com'
// }));

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);