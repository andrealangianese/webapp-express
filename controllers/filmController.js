// importo connection e la salvo dal db.js

const connection = require('../data/db')

// funzione di index 
function index(req, res) {

    //preparo la query
    const sql = 'SELECT * FROM movies'

    //eseguo la query
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Server Error' });
        }
        // creo una copia dei risultati con modifica path imgs

        const movies = results.map(movie => {
            return {
                ...movie,
                image: req.imagePath + movie.image
            }
        })

        // res.json(movies);

        res.json(movies);
    })
}

// funzione di show 
function show(req, res) {

    const { id } = req.params

    //preparo la query
    const sql = 'SELECT * FROM movies WHERE id = ?'

    //aggiungo reviews a movies confrontando id

    const reviewSql = 'SELECT * FROM reviews where movie_id = ?'

    //eseguo la query base 

    connection.query(sql, [id], (err, results) => {
        if (err) { return res.status(500).json({ error: 'Server Error' }) }
        if (results.length === 0) { return res.status(404).json({ error: 'Movie not found' }) }

        const movie = results[0]

        
        //eseguo query che restituisce anche review

        connection.query(reviewSql, [id], (err, reviewResults) => {
            if (err) { return res.status(500).json({ error: 'Server Error' }) }

            // aggiungo le review al film
            movie.reviews = reviewResults
            res.json(movie)



        })

    })
}

// creo funzione per aggungere nuove review al film

function storeReview(req, res) {

    // recupero id dinamicamente

    const { id } = req.params

    // recupero dati dal body della richiesta
    const { name, vote , text} = req.body
}

module.exports = { index, show, storeReview }