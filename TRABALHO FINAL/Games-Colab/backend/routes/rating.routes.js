module.exports = app => {
    const rating = require('../controllers/rating.controller');
    let router = require('express').Router();

    router.post('/', rating.create);

    router.get('/:id', rating.findOne);

    router.get('/', rating.findAll);

    router.put('/:id', rating.update);

    router.delete('/:id', rating.delete);

    app.use('/ratings', router);

}; 