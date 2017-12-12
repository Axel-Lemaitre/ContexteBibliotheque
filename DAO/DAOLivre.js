const { Client } = require('pg');
const Livre = require('../model/Livre');
const Exemplaire = require('../model/Exemplaire');

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


    getUnLivre(id,cb){
        let unLivre;
        let query = {
            name: 'fetch-un-livre',
            text: 'SELECT * FROM livre INNER JOIN auteur ON livre.lauteur = auteur.idauteur WHERE livre.idlivre = '+id,
        };

        this._client.query(query, function (err, result) {
            if (err) {
                console.log(err.stack);
            } else {
                result.rows.forEach(function(row) {
                    console.log(row['titre']);
                    unLivre = new Livre(row['idlivre'], row['titre'], row['resume'], row['isbn'], row['nom']);
                });
                cb(unLivre);
            }
        });
    };


    getLesExemplaire(num,cb){
        let lesExemplaires = [];
        let query = {
            name: 'fetch-un-livre',
            text: 'SELECT * FROM exemplaire INNER JOIN livre ON livre.idlivre = exemplaire.idlivre WHERE exemplaire.idlivre = '+num,
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
            text: 'SELECT * FROM exemplaire INNER JOIN livre ON livre.idlivre = exemplaire.idlivre WHERE exemplaire.idlivre = '+id+' AND exemplaire.numero = '+id2,
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

    setNewLivre(titre, resume, isbn, auteur, cb){
        let query = {
            name: 'add-new-livre',
            text: "INSERT INTO livre VALUES (0,'"+titre+"','"+resume+"','"+isbn+"','"+auteur.unId+"');"
        };

        this._client.query(query, function (err) {
            if (err) {
                console.log(err.stack);
                cb(false);
            } else {
                cb(true);
            }
        });
    };
}

module.exports = DAOLivre;