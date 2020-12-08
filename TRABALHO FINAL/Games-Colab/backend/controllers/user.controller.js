const db = require("../models");
const User = db.user;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name || !req.body.email || !req.body.password) {
        res.status(400).send({ message: "(*) Campos obrigatórios não podem ser vazios!" });
        return;
    }

    // Create a User instance
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: User.generateHash(req.body.password)
    });

    // Save User in the database
    user
        .save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ 
                    message: err.message || "Algum erro aconteceu ao salvar o usuário."
                });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    User
        .findById(id)
        .then(data => {
            if (!data)
                res
                    .status(404)
                    .send({
                        message: "Não foi encontrado um usuário com o ID " + id
                    });
            else {
                res
                    .status(200)
                    .send(data);
            }
        })
        .catch(() => {
            res
                .status(500)
                .send({
                    message: "Erro ao buscar um usuário com o ID " + id
                });
        });
};

exports.findAll = (req, res) => {
    User
        .find({})
        .then(data => {
            res
                .status(200)
                .send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({
                    message: err.message || "Algum erro aconteceu ao buscar os usuários."
                });
        });
};

exports.login = (req, res) => {
    User
        .findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "Usuário não encontrado!",
                });
            }

            if (!user.validatePassword(req.body.password)) {
                res
                    .status(400)
                    .send({
                        message: "Senha inválida",
                    });
            } else {
                res
                    .status(200)
                    .send(user);
            }
        })
        .catch(err => {
            res
                .status(500)
                .send({
                    message: err.message || "Algum erro aconteceu ao tentar autenticar o usuário.",
                });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({
                message: "Body da requisição não pode ser vazio.",
            });
    }

    // Check and treats if password exists
    if (req.body.password) {
        const password = User.generateHash(req.body.password);

        if (!password) {
            return res
                .status(500)
                .send({
                    message: "Senha inválida!",
                });
        }
        req.body.password = password;
    }

    const id = req.params.id;

    User
        .findByIdAndUpdate(id, req.body)
        .then(data => {
            if (!data) {
                res
                    .status(404)
                    .send({
                        message: `Não foi possível encontrar um usuário com o ID ${id}. Talvez o usuário não exista!`
                    });
            } else {
                res.send({
                    message: "Usuário atualizado com sucesso."
                });
            }
        })
        .catch(err => {
            res
                .status(500)
                .send({
                    message: err.message || "Algum erro aconteceu ao tentar atualizar o usuário com o ID " + id
                });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    User
        .findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res
                    .status(404)
                    .send({
                        message: `Não foi possível excluir o usuário de ID ${id}. Talvez o usuário não exista!`
                    });
            } else {
                res.send({
                    message: "Usuário deletado com sucesso!",
                });
            }
        })
        .catch(() => {
            res
                .status(500)
                .send({
                    message: "Erro ao excluir o usuário com o ID" + id
                });
        });
};