var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { mensagem: 'Hellow word' });
});

router.get('/ola', function(req, res, next) {
  res.render('index', { mensagem: 'Olá mundo!' });
});

router.get('/adeus', function(req, res, next) {
  res.render('index', { mensagem: 'Adeus mundo cruel!' });
});

module.exports = router;
