const express = require('express');
const jsonServer = require('json-server');

const app = express();

const db = jsonServer.router('./db/index.json');
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use("/api/", db);

app.use('/', (req, res) => {
    res.send('Hello');
})

app.listen(process.env.PORT, () => {
    console.log('Server is live');
})