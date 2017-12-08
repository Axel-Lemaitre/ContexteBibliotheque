const DAOLivre = require('../DAO/DAOLivre');
const DAOLivres = new DAOLivre();


    //Montre une liste de tous les livres
    exports.livre_list = function (req, res, next) {
        DAOLivres.getTousLesLivres(function(lesLivres){
            res.render('listeLivres', {listeLivre : lesLivres});
        });
    }

    exports.livre_detail = function (req,res,next) {
        res.render('NOT IMPLEMENTED');
    }

    exports.livre_list_exemplaire = function(req, res, next) {
        res.render('NOT IMPLEMENTED');
    }

    exports.livre_detail_exemplaire = function (req, res, next) {
        res.render('NOT IMPLEMENTED');
    }

    exports.livre_ajout = function (req, res) {
        res.send('NOT IMPLEMENTED');
    }

    exports.livre_ajout_exemplaire = function(req, res) {
        res.send('NOT IMPLEMENTED');
    }