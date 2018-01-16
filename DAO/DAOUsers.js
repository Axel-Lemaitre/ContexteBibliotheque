const { Client } = require('pg');
const User = require('../model/User');

class DAOUsers{


    constructor(){
        this._client = new Client({
            connectionString : 'postgres://bobet:bobet@192.168.222.86:5432/biblio'
        });

        this._client.connect(function (err) {
            if (err) return done(err);
        });
    }

    getUserByUsername(username, cb){
        const query = {
            name: 'get user by username',
            text: 'SELECT idlecteur, username, password, libelle FROM lecteur INNER JOIN rolebiblio on idrole = roleb WHERE username = $1 ',
            values: [username]
        };

        console.log(query.values[0]);

        this._client.query(query, function (err,result) {
            if (err) {
                console.log(err.stack);
            } else {
                var unUser;
                unUser = new User(result.rows[0]['idlecteur'], result.rows[0]['username'], result.rows[0]['password'], result.rows[0]['libelle']);
                cb(null, unUser);
            }
        });
    };

    getUserById(id, cb){
        const query = {
            name: 'get user by id',
            text: "SELECT idlecteur, username, password, libelle FROM lecteur INNER JOIN rolebiblio on idrole = roleb WHERE idlecteur = $1;",
            values: [id]
        };

        this._client.query(query, function(err, result){
            if(err){
                console.log(err.stack);
            } else{
                let unUser;
                unUser = new User(result.rows[0]['idlecteur'], result.rows[0]['username'], result.rows[0]['password'], result.rows[0]['libelle']);
                cb(null, unUser);
            }
        });
    };

}

module.exports = DAOUsers;