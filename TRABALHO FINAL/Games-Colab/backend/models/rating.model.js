module.exports = (mongoose) => {
    let schema = mongoose.Schema({
        rate: {
            type: Number,
            required: true,
            min: 0,
            max: 10
        },
        comment: {
            type: String,
            trim: true
        },
        game_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'games',
            required: true
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            required: true
        },
        __v: {
            type: Number,
            select: false
        }
    });

    const Rating = mongoose.model('rating', schema);

    return Rating;
}; 