var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('magic/magic.html', { title: 'magic page' });
});

module.exports = router;