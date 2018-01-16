var express = require('express');
var router = express.Router();

const passport = require('passport');

let controllerUsers = require('../controller/controllerUsers');

/* GET users listing. */
router.get('/login', controllerUsers.login_form);

router.post('/login', passport.authenticate('local', { failureRedirect: 'login'}), controllerUsers.login_authentication);

module.exports = router;
