const db = require('../models')
const Rating = db.rating;
const Game = db.game;

exports.create = async (req, res) => {
    // Validate request
    if (!('rate' in req.body) || !req.body.comment || !req.body.game_id || !req.body.user_id) {
        res
            .status(400)
            .send({ message: "(*) Campos obrigatórios não podem ser vazios!" });
            return;
        }

    // Create a rating instance
    const rating = new Rating({
        rate: req.body.rate,
        comment: req.body.comment,
        game_id: req.body.game_id,
        user_id: req.body.user_id
    });

    await updateRating({ rating: req.body.rate, game_id: rating.game_id });

    // Save rating in the database
    rating
        .save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({
                    message: err.message || "Algum erro aconteceu ao salvar a avaliação."
                });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Rating
        .findById(id)
        .then(data => {
            if (!data)
                res
                    .status(404)
                    .send({
                        message: "Não foi encontrado uma avaliação com o ID " + id
                    });
            else 
                res.send(data);
        })
        .catch(() => {
            res
                .status(500)
                .send({
                    message: "Erro ao buscar uma avaliação com o ID " + id
                });
        });
};

exports.findAll = (req, res) => {
    const game_id = req.query.game_id;
    let condition = game_id ? { game_id: game_id } : {};

    Rating
        .find(condition)
        .then(data => {
            res
                .status(200)
                .send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({
                    message: err.message || "Algum erro aconteceu ao buscar as avaliação."
                });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        res
            .status(400)
            .send({
                message: "Body da requisição não pode ser vazio"
            });
        return;
    }

    const id = req.params.id;

    Rating
        .findByIdAndUpdate(id, req.body)
        .then(async data => {
            if (!data) {
                res
                    .status(404)
                    .send({
                        message: `Não foi possível encontrar uma avaliação com o ID ${id}. Talvez a avaliação não exista!`
                    });
            } else {
                if ('rate' in req.body) await updateRating({ rating: req.body.rate, game_id: data.game_id });

                res.send({
                    message: "Avaliação atualizada com sucesso."
                });
            }
        })
        .catch(err => {
            res
                .status(500)
                .send({
                    message: err.message || "Algum erro aconteceu ao tentar atualizar a avaliação com o ID " + id
                });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Rating
        .findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res
                    .status(404)
                    .send({
                        message: `Cannot delete Rating with id=${id}. Maybe rating was not found!`
                    });
            } else {
                res.send({
                    message: "Avaliação deletada com sucesso!"
                });
            }
        })
        .catch(() => {
            res
                .status(500)
                .send({
                    message: "Erro ao excluir a avaliação com o ID" + id
                });
        });
}; 

async function updateRating({ rating, game_id } = {}) {
    Game
        .findById(game_id)
        .then(async data => {
            const newRatingGame = ((data.rating+rating) / 2).toFixed(2);
            await Game.findByIdAndUpdate(game_id, { rating: newRatingGame })
        });
}