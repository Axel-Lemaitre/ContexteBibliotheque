


exports.login_form = function(req, res) { // attention à la route / depuis le /login
    res.render('login');
};

exports.login_authentication = function(req, res) {
    res.redirect('/');
};