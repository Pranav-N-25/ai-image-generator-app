const mongoose = require('mongoose');

const userschemaSchema = new mongoose.Schema({
    username: {type:String,required:true},
    userImageUrl: {type:String,required:true},
    email:{type:String,required:true,unique:true},
    createdAt:{}
},{
    timestamps: true,
});

const Userschema = mongoose.model('userschema', userschemaSchema)

module.exports = Userschema