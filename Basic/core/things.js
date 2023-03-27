var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send({ "message": "hello" });
    next();
});

router.post('/', function (req, res, next) {
    res.send('POST route on things.');
    next();
});
router.get('/:id', function (req, res, next) {
    res.send('The id you specified is ' + req.params.id);
    next();
});
router.get('/regex/:id([0-9]{5})', function (req, res, next) {
    res.send('id: ' + req.params.id);
    next();
});
router.get('/:name/:id', function (req, res, next) {
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
    next();
});

//export this router to use in our index.js
module.exports = router;