const DAOLivre = require('../DAO/DAOLivre');
const DAOLivres = new DAOLivre();

const DAOAuteur = require('../DAO/DAOAuteur');
const DAOAuteurs = new DAOAuteur();


exports.livre_ajout = function (req, res) {
    DAOAuteurs.getLAuteur(req.body.auteur,function(lAuteur){
        DAOLivres.setNewLivre((req.body.titre),(req.body.resume),(req.body.isbn),lAuteur);
    });
    res.redirect('/');
}

    //Montre une liste de tous les livres
    exports.livre_list = function (req, res, next) {
        DAOLivres.getTousLesLivres(function(lesLivres){
            res.render('listeLivres', {listeLivre : lesLivres, user: req.user});
        });
    }

    exports.livre_detail = function (req,res,next) {
        DAOLivres.getUnLivre(req.params.id,function(leLivre){
            res.render('detailLivre', {livre : leLivre, user: req.user});
        });
    }

    exports.livre_list_exemplaire = function(req, res, next) {
        DAOLivres.getLesExemplaire(req.params.id,function(lesExemplaires){
            res.render('listeExemplaires', {lesExemplaires : lesExemplaires});
        });
    }

    exports.livre_detail_exemplaire = function (req, res, next) {
        DAOLivres.getUnExemplaire(req.params.id,req.params.name,function(lExemplaire){
            res.render('detailExemplaire', {lExemplaire : lExemplaire, user: req.user});
        });
    }

    exports.livre_list_aut = function (req, res) {
        console.log('dans livre list aut');
        DAOAuteurs.getLesAuteurs(function(lesAuteurs){
            res.render('formAddLivre', {lesAuteurs : lesAuteurs, user: req.user});
        });
    }


    exports.livre_ajout_exemplaire = function(req, res) {
        for (var i = 0; i < req.body.nombre; i++) {
            DAOLivres.setNewExemplaire(req.params.id);
        }
        res.redirect('/');
    }

    exports.livre_retrait_exemplaire = function(req, res) {
        DAOLivres.dropExemplaire(req.params.id, req.params.name);
        res.redirect('/');
    }