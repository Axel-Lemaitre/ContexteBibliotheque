const { Client } = require('pg');
const Auteur = require('../model/Auteur');

class DAOAuteur{

    constructor(){
        this._client = new Client({
            connectionString : 'postgres://bobet:bobet@192.168.222.86:5432/biblio'
        });

        this._client.connect(function (err){
            if (err) return done(err);
        });
    }

    getLesAuteurs(cb){

        let query = {
            name: 'fetch-all-auteurs',
            text: 'SELECT * FROM auteur; '
        };

        this._client.query(query, function (err, result) {
            let lesAuteurs = [];
            if (err) {
                console.log(err.stack);
            } else {
                result.rows.forEach(function(row) {
                    let unAuteur;
                    unAuteur = new Auteur(row['idauteur'],row['nom'],row['prenom'],row['datedenaissance'],row['datededeces']);
                    lesAuteurs.push(unAuteur);
                });
                cb(lesAuteurs);
            }
        });
    };
}
module.exports = DAOAuteur;