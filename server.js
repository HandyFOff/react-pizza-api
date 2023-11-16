const express = require('express');
const jsonServer = require('json-server');

const app = express();

const db = jsonServer.router('./db/index.json');
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(db);

app.get('/', (req, res) => {
    res.send('Hello');
})

app.listen(8080, () => {
    console.log('Server is live');
})