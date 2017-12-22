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
            name: 'fetch-un-idauteur',
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


    getLAuteur(nom, cb){

        let query = {
            name: 'fetch-all-auteurs',
            text: "SELECT idauteur FROM auteur WHERE auteur.nom='"+nom+"';"
        };

        this._client.query(query, function (err, result) {
            let unIdAuteur;
            if (err) {
                console.log(err.stack);
                cb(null);
            } else {
                result.rows.forEach(function(row) {
                    unIdAuteur = row['idauteur'];
                    cb(unIdAuteur);
                });
            }
        });
    };
}
module.exports = DAOAuteur;