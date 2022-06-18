var express = require('express');
var path = require('path');
// const client = require('../utils/db');
var router = express.Router();
var auth = require("../utils/auth");

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.sendFile(path.join(`../index.html`),{root: path.join(__dirname,"./")});
  res.render('index', {});
});
router.get('/about', function(req, res, next) {
  res.render('about', {});
});
router.get('/register', function(req, res, next) {
  res.render('register', {});
});



module.exports = router;
