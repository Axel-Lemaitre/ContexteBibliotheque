const DAOLivre = require('../DAO/DAOLivre');

const DAOLivres = new DAOLivre();


    //Montre une liste de tous les livres
    exports.livre_list = function (req, res, next) {
        let listeLivre = DAOLivres.getTousLesLivres();
        res.render('views/listLivres', {listeLivre : listeLivre});
    }