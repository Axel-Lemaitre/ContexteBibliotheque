const { Client } = require('pg');
const Livre = require('../model/Livre');
const Exemplaire = require('../model/Exemplaire');
const DAOAuteur = require('../DAO/DAOAuteur');
const DAOAuteurs = new DAOAuteur();

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

        let query = {
            name: 'fetch-all-livre',
            text: "SELECT * FROM livre INNER JOIN auteur ON livre.lauteur = auteur.idauteur;",
        };

        this._client.query(query, function (err, result) {
            let lesLivres = [];
            if (err) {
                console.log(err.stack);
            } else {
                result.rows.forEach(function(row) {
                    let unLivre;
                    unLivre = new Livre(row['iddocument'], row['titre'], row['resume'], row['isbn'], row['nom']);
                    lesLivres.push(unLivre);
                });
                cb(lesLivres);
            }
        });
    };


    getUnLivre(id,cb){
        let query = {
            name: 'fetch-un-livre',
            text: "SELECT * FROM livre INNER JOIN auteur ON livre.lauteur = auteur.idauteur WHERE livre.iddocument = $1;",
            values: [id]
        };

        console.log(query.text);

        this._client.query(query, function (err, result) {
            if (err) {
                console.log(err.stack);
            } else {
                let unLivre;
                console.log(result.rows[0]['titre']);
                unLivre = new Livre(result.rows[0]['iddocument'], result.rows[0]['titre'], result.rows[0]['resume'], result.rows[0]['isbn'], result.rows[0]['nom']);
                cb(unLivre);
            }
        });
    };


    getLesExemplaire(num,cb){
        let lesExemplaires = [];
        let query = {
            name: 'fetch-un-livre',
            text: "SELECT * FROM exemplaire INNER JOIN livre ON livre.iddocument = exemplaire.idlivre WHERE exemplaire.idlivre = $1;",
            values: [num]
        };

        this._client.query(query, function (err, result) {
            if (err) {
                console.log(err.stack);
            } else {
                result.rows.forEach(function(row) {
                    let unExemplaire;
                    unExemplaire = new Exemplaire(row['idlivre'], row['numero'], row['statut'], row['dateretour'], row['titre']);
                    lesExemplaires.push(unExemplaire);
                });
                cb(lesExemplaires);
            }
        });
    };

    getUnExemplaire(id,id2,cb){
        let unExemplaire;
        let query = {
            name: 'fetch-un-livre',
            text: "SELECT * FROM exemplaire INNER JOIN livre ON livre.iddocument = exemplaire.idlivre WHERE exemplaire.idlivre = $1 AND exemplaire.numero = $2;",
            values: [id,id2]
        };

        this._client.query(query, function (err, result) {
            if (err) {
                console.log(err.stack);
            } else {
                result.rows.forEach(function(row) {
                    console.log(row['titre']);
                    unExemplaire = new Exemplaire(row['idlivre'], row['numero'], row['statut'], row['dateretour'], row['titre']);
                });
                cb(unExemplaire);
            }
        });
    };

    setNewLivre(titre, resume, isbn, auteur){
        const query = {
            name: 'add-new-livre',
            text: "select creelivre('$1','$2','$3',$4);",
            values: [titre, resume, isbn, auteur]
        };

        this._client.query(query, function (err) {
            if (err) {
                console.log(err.stack);
            }
        });
    };
}

module.exports = DAOLivre;