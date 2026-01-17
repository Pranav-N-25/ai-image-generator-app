const mongoose = require('mongoose');

const imageSchemaSchema = new mongoose.Schema({
    name: {type:String,required:true},
    userId:{type:String,required:true},
    imageUrl:{type:String,required:true},
},{
    timestamps: true,
});

const ImageSchema = mongoose.model('imageSchema', imageSchemaSchema);

module.exports = ImageSchema;
