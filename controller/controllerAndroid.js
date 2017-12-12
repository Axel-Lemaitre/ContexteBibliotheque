const DAOLivre = require('../DAO/DAOLivre');
const DAOLivres = new DAOLivre();


//Montre une liste de tous les livres
exports.livre_list = function (req, res, next) {
    DAOLivres.getTousLesLivres(function(lesLivres){
        res.send(lesLivres);
    });
}
