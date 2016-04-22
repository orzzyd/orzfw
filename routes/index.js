var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect('/magic');
    //res.render('index.html', { title: 'index page' });
});

module.exports = router;