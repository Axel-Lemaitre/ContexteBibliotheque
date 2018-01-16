var express = require('express');
var router = express.Router();

let controllerGenre = require('../controller/controllerGenre');

router.get('/add',controllerGenre.form_add_genre);

//GET formulaire ajout genre
router.post('/add', controllerGenre.ajout_genre);

module.exports = router();
