const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('<h1>Welcome to UrbanEats Web</h1>'));
app.get('/health', (req, res) => res.status(200).send('OK'));

app.listen(3000, () => console.log('Web listening on port 3000'));