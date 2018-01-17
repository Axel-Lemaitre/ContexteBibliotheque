var express = require('express');
var router = express.Router();



let controllerLivre = require('../controller/controllerLivre');

//POST ajout d'un livre
router.post('/add', controllerLivre.livre_ajout);

//GET liste de tous les livres
router.get('/add', controllerLivre.livre_list_aut);

//GET liste de tous les livres
router.get('/', controllerLivre.livre_list);

    //GET detail livre
router.get('/:id', controllerLivre.livre_detail);

    //GET liste exemplaires d'un livre
router.get('/:id/exemplaire', controllerLivre.livre_list_exemplaire);

    //GET detail d'un exemplaire
router.get('/:id/exemplaire/:name', controllerLivre.livre_detail_exemplaire);

    //POST ajout d'un exemplaire de livre
router.post('/:id/exemplaire', controllerLivre.livre_ajout_exemplaire);

router.get('/:id/exemplaire/:name/retrait', controllerLivre.livre_retrait_exemplaire);

module.exports = router;