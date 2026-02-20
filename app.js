//importo express

const express = require('express');
const app = express();
const port = 3000;

// attivazione della cartella public per uso file statici
app.use(express.static('public'));