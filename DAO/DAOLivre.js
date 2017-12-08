const { Client } = require('pg');
const Livre = require('../model/Livre');

class DAOLivre{

    constructor(){
        this._client = new Client({
            connectionString : 'postgres://bobet:bobet@192.168.222.86:5432/biblio'
        });

        this._client.connect(function (err){
            if (err) return done(err);
        });
    }

    getTousLesLivres(cb){

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
                    console.log(row['titre']);
                    unLivre = new Livre(lesLivres.length, row['titre'], row['resume']);
                    lesLivres.push(unLivre);
                });
                console.log(lesLivres.length);
                console.log(lesLivres[0].titre);
                cb(lesLivres);
            }
        });
    };
}

module.exports = DAOLivre;