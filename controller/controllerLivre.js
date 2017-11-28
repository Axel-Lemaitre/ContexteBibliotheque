var Livre = require('../model/Livre');

const DAOLivre = require('../DAO/DAOLivre')
const DAOLivre = new DAOLivre();


    //Montre une liste de tous les livres
    exports.livre_list = function (req, res, next) {
        let listeLivre = DAOLivre.getTousLesLivres();
        res.render('views/listLivres', {listeLivre : listeLivre});
    }