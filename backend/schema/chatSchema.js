const mongoose = require('mongoose');

const chatSchemaSchema = new mongoose.Schema({
    key: {type:String},
},{
    timestamps: true,
});

const ChatSchema = mongoose.model('chatSchema', chatSchemaSchema)

module.exports = ChatSchema