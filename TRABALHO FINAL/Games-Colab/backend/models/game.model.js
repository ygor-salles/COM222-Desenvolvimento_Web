module.exports = (mongoose) => {
    let schema = mongoose.Schema({
        type: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        summary: {
            type: String,
            required: true
        },
        developer: {
            type: String,
            required: true
        },
        genre: {
            type: String,
            required: true
        },
        imgPath: String,
        rating: {
            type: Number,
            default: 0
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            required: true
        },
        __v: {
            type: Number,
            select: false,
        },
    });

    const Game = mongoose.model("games", schema);

    return Game;
};
