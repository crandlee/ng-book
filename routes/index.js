/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title: 'Express' });
};


exports.signup = function (req, res) {
    res.render('signup');
};

exports.firstDirective = function (req, res) {

    res.render('firstDirective');
};

exports.ngInclude = function(req, res) {
    res.render('nginclude');
};