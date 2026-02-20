// importo connection e la salvo dal db.js

const connection = require('../data/db')

// funzione di index 
function index(req, res){

//preparo la query
const sql = 'SELECT * FROM movies'

//eseguo la query
connection.query(sql, (err, results) => {
    if(err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Server Error' });
        return;
    }
    res.json(results);
})}

// funzione di show 
function show(req, res){

    const {id} = req.params

    //preparo la query
    const sql = 'SELECT * FROM movies WHERE id = ?'

    //eseguo la query
    connection.query(sql, [id], (err, results) => {
        if(err) {return res.status(500).json({ error: 'Server Error' })}
        if(results.length === 0) {return res.status(404).json({ error: 'Movie not found' })}
        
        // se tutto va bene, restituisco il film trovato
        res.json(results[0])

        


    })}

module.exports = {index, show}