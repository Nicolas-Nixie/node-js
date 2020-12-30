const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const min = 3000;
const max = 4000;

const node_env = 'dev'
const port = Math.floor(Math.random() * (max - min +1)) + min;

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/ping', (req, res) => {
    res.json({ reponse: 'pong'});
})

app.listen(port, () => {
    console.log(`listening on port ${port} in ${node_env} mode`);
});