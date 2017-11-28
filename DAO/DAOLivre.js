const { Client } = require('pg');
const Livre = require('../model/Livre');

class DAOLivre{

    constructor(){
        this._client = new Client({
            connectionString : 'postgres://postgres:Password1@172.16.4.199:5432/biblio'
        });

        this._client.connect(function (err){
            if (err) return done(err);
        });
    }

    getTousLesLivres(displaycb){

        const query = {
            name: 'fetch-all-livre',
            text: 'SELECT * FROM livre',
        };

        this._client.query(query, function (err, result) {
            let lesLivres = [];
            if (err) {
                console.log(err.stack);
            } else {
                result.rows.forEach(function(row) {
                    let unLivre;

                    unLivre = new Livre(lesLivres.length, row['titre'], row['resume'],);
                    lesLivres.push(unLivre);
                });

                displaycb(lesLivres);
            }
        });
    };
}

module.exports = DAOLivre;