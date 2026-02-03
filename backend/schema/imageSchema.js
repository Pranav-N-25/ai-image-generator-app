const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    imageName: {
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
