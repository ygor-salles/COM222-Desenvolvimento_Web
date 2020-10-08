var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cadastro' });
});

router.post('/cadastro', function(req, res, next) {

  const { nome, idade, email, linguagens, notify } = req.body

  res.render('cadastrado', { 
    title: 'Cadastrado com sucesso',
    nome,
    idade,
    email,
    linguagens,
    notify 
  });
});

module.exports = router;
