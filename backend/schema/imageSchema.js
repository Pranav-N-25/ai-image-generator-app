const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    imageName: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
