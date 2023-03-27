var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({ "message": "hello" });
});

router.post('/', function (req, res, next) {
  res.send('POST route on things.');
});
router.get('/:id', function (req, res, next) {
  res.send('The id you specified is ' + req.params.id);
});
router.get('/regex/:id([0-9]{5})', function (req, res, next) {
  res.send('id: ' + req.params.id);
});
router.get('/:name/:id', function (req, res, next) {
  res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});
module.exports = router;
