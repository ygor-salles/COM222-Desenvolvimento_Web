module.exports = app => {
    const user = require('../controllers/user.controller');
    let router = require('express').Router();

    router.post('/', user.create);
    
    router.post('/login', user.login);

    router.get('/:id', user.findOne);

    router.get('/', user.findAll);

    router.put('/:id', user.update);

    router.delete('/:id', user.delete);

    app.use('/users', router);

};