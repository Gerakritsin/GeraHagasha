var express = require('express');
var path = require('path');
var router = express.Router();
var auth = require("../utils/auth");

router.post('/register', function(req, res, next) {
 
    var mail = req.body.mail;
    var password = req.body.password;
    var phone = req.body.phone;
    

    res.json(auth.register(mail, password));

    
});

module.exports = router;