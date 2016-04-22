var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('magic.html', { title: 'magic page' });
});
// second link
// router.get('/second', function(req, res, next) {
//     res.render('magic/magic.html', { title: 'magic page' });
// });
module.exports = router;