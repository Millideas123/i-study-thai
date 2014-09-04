/**
 * Routing configuration
 */
'use strict';

var api = {};

exports.index = function(req, res){
  res.render('index');
};

exports.root = function (req, res) {
    if (!req.user) {
        res.render('index');
    }
    else {
        res.render('index');
    }
};

exports.views = function (req, res) {
    //var name = req.params.name;
    res.sendfile('home.html');
}

api.user = require('../server/api/user');

exports.register = function (req, res) {
    api.user.create(req, res);
};

exports.login = function (req, res) {
    res.render('login');
};

exports.logout = function (req, res) {
    req.logout();
    res.send('OK', 201);
}

exports.getUserDetails = function (req, res) {
    api.user.getUserDetails(req, res);
}
