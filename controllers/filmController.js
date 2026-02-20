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

}

module.exports = {index, show}