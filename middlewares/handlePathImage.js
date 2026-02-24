function handlePathImage(req, res, next) {
    // creo nuova proprietà da aggiungere a req per path img
    // req.protocol metodo preimpostato ritorna di default http o https
    // req.get('host') = Qual è l’host (dominio + eventuale porta) da cui è arrivata la richiesta?
    req.imagePath = `${req.protocol}://${req.get('host')}/img/books/`;
    // procedi con la risposta
    next();
}

module.exports = handlePathImage;