//importo express

const express = require('express');
const app = express();
const port = 3000;

//importo i middleware prima di usarli

const errorsHandler = require('./middlewares/errorsHandler')

const notFound = require('./middlewares/notFound')

// attivazione della cartella public per uso file statici
app.use(express.static('public'));

// creo rotta home APP
app.get('/', (req, res) => {
    res.send("<h1>Rotta di home dei movies</h1>")
})

//registro middleware per rotta inesistente

app.use(notFound)

//registro middleware dopo le rotte l'errore 500

app.use(errorsHandler)

// creo rotta porta 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})