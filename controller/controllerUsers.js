


exports.login_form = function(req, res) { // attention à la route / depuis le /login
    res.render('login', {user: req.user});
};

exports.login_authentication = function(req, res) {
    res.redirect('/');
};