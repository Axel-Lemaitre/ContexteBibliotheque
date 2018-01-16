const DAOGenre = require('../DAO/DAOGenre');
const DAOgenre = new DAOGenre();

exports.form_add_genre = function (req, res){
    res.render('formAddGenre');
}

exports.ajout_genre = function (req, res){
    DAOgenre.addNewGenre(req.body.genre);
    res.redirect('/');
}