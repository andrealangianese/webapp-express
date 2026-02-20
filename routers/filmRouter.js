// importo parte di express
const express = require('express');

// utilizzo parte di express per gestire le rotte
const router = express.Router();

// importo relativo controller da usare

const filmController = require('../controllers/filmController')

// definisco le rotte

// rotta di index

router.get('/' , filmController.index)

// rotta di show

router.get('/:id', filmController.show)

//esporto le rotte

module.exports = router