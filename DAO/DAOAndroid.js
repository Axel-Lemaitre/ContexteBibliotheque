const { Client } = require('pg');
const Livre = require('../model/Livre');
const Exemplaire = require('../model/Exemplaire');

class DAOAndroid {

    constructor() {
        this._client = new Client({
            connectionString: 'postgres://bobet:bobet@192.168.222.86:5432/biblio'
        });

        this._client.connect(function (err) {
            if (err) return done(err);
        });
    }

    getTousLesLivres(cb){

        let query = {
            name: 'fetch-all-livre',
            text: 'SELECT * FROM livre INNER JOIN auteur ON livre.lauteur = auteur.idauteur',
        };

        this._client.query(query, function (err, result) {
            let lesLivres = [];
            if (err) {
                console.log(err.stack);
            } else {
                result.rows.forEach(function(row) {
                    let unLivre;
                    unLivre = new Livre(row['idlivre'], row['titre'], row['resume'], row['isbn'], row['nom']);
                    lesLivres.push(unLivre);
                });
                cb(lesLivres);
            }
        });
    };

    getLesExemplaire(num, cb) {
        let lesExemplaires = [];
        let query = {
            name: 'fetch-un-livre',
            text: 'SELECT * FROM exemplaire INNER JOIN livre ON livre.idlivre = exemplaire.idlivre WHERE livre.titre = ' + num,
        };

        this._client.query(query, function (err, result) {
            if (err) {
                console.log(err.stack);
            } else {
                result.rows.forEach(function (row) {
                    let unExemplaire;
                    unExemplaire = new Exemplaire(row['idlivre'], row['numero'], row['statut'], row['dateretour'], row['titre']);
                    lesExemplaires.push(unExemplaire);
                });
                cb(lesExemplaires);
            }
        });
    };
}

module.exports= DAOAndroid;